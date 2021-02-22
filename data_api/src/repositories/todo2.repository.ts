import {Getter, inject} from '@loopback/core';
import {BelongsToAccessor, DefaultCrudRepository, FilterExcludingWhere, repository} from '@loopback/repository';
import {DbpostgresDataSource} from '../datasources';
import {Todo2, Todo2Relations, TodoList} from '../models';
import {TodoListRepository} from './todo-list.repository';

export class Todo2Repository extends DefaultCrudRepository<Todo2, typeof Todo2.prototype.id, Todo2Relations> {
  public readonly todoList: BelongsToAccessor<TodoList, typeof Todo2.prototype.id>;

  constructor(
    @inject('datasources.dbpostgres') dataSource: DbpostgresDataSource,
    @repository.getter('TodoListRepository') protected todoListRepositoryGetter: Getter<TodoListRepository>,
  ) {
    super(Todo2, dataSource);
    this.todoList = this.createBelongsToAccessorFor('todoList', todoListRepositoryGetter);
    this.registerInclusionResolver('todoList', this.todoList.inclusionResolver);
  }

  public async findByCompleteStatus(completeStatus: boolean, filter?: FilterExcludingWhere<Todo2>): Promise<Todo2[]> {
    return this.find({where: {isComplete: {eq: completeStatus}}, limit: 100});
  }

  public async findByCompleteStatusWithSql(
    completeStatus: boolean,
    filter?: FilterExcludingWhere<Todo2>,
  ): Promise<Todo2[]> {
    return (this.execute('SELECT * FROM todo2 WHERE "isComplete"=$1 LIMIT 100', [
      completeStatus,
    ]) as unknown) as Promise<Todo2[]>;
  }
}
