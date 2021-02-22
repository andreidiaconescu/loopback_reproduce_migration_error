import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, HasManyRepositoryFactory, repository} from '@loopback/repository';
import {DbpostgresDataSource} from '../datasources';
import {Todo2, TodoList, TodoListRelations, TodoListWithRelations} from '../models';
import {Todo2Repository} from './todo2.repository';

export class TodoListRepository extends DefaultCrudRepository<
  TodoList,
  typeof TodoList.prototype.id,
  TodoListRelations
> {
  public readonly todo2s: HasManyRepositoryFactory<Todo2, typeof TodoList.prototype.id>;

  constructor(
    @inject('datasources.dbpostgres') dataSource: DbpostgresDataSource,
    @repository.getter('Todo2Repository') protected todo2RepositoryGetter: Getter<Todo2Repository>,
  ) {
    super(TodoList, dataSource);
    this.todo2s = this.createHasManyRepositoryFactoryFor('todo2s', todo2RepositoryGetter);
    this.registerInclusionResolver('todo2s', this.todo2s.inclusionResolver);
  }

  public findByTitle(title: string) {
    return this.findOne({where: {title}});
  }

  public async todoListAndSubEntitiesWithSqlJoin(todoId: string): Promise<TodoListWithRelations | null> {
    const dbData = (await (this.execute(
      `SELECT "tdl"."id" AS todo_list_id, "tdl"."title" as todo_list_title, "tdl"."color" as todo_list_color,
        "td"."id" AS todo_id, "td"."title" AS todo_title, "td"."desc" AS todo_desc, "td"."isComplete" AS todo_is_complete
      FROM "todolist" AS tdl
        INNER JOIN "todo2" AS td ON "tdl"."id"="td"."todoListId"
      WHERE "tdl"."id"=$1`,
      [todoId],
    ) as unknown)) as Promise<TodoListWithRelations>;

    console.log('TodoListRepository todoListAndSubEntitiesWithSqlJoin dbData', dbData);

    let todoList: TodoListWithRelations | null = null;
    const todo2s: Todo2[] = [];
    if (Array.isArray(dbData) && dbData.length) {
      let index = -1;
      for (const dbDataItem of dbData) {
        index += 1;
        if (index === 0) {
          todoList = new TodoList({
            id: dbDataItem.todo_list_id,
            title: dbDataItem.todo_list_title,
            color: dbDataItem.todo_list_color,
            todo2s: todo2s,
          });
        }
        todo2s.push(
          new Todo2({
            id: dbDataItem.todo_id,
            title: dbDataItem.todo_title,
            desc: dbDataItem.todo_desc,
            isComplete: dbDataItem.todo_is_complete,
          }),
        );
      }
    }
    console.log('TodoListRepository todoListAndSubEntitiesWithSqlJoin todoList', todoList);

    return todoList;
  }
}
