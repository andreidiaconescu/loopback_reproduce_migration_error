import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { DbpostgresDataSource } from '../datasources';
import { Todo2, TodoList, TodoListRelations, TodoListWithRelations } from '../models';
import { Todo2Repository } from './todo2.repository';
export declare class TodoListRepository extends DefaultCrudRepository<TodoList, typeof TodoList.prototype.id, TodoListRelations> {
    protected todo2RepositoryGetter: Getter<Todo2Repository>;
    readonly todo2s: HasManyRepositoryFactory<Todo2, typeof TodoList.prototype.id>;
    constructor(dataSource: DbpostgresDataSource, todo2RepositoryGetter: Getter<Todo2Repository>);
    findByTitle(title: string): Promise<TodoListWithRelations | null>;
    todoListAndSubEntitiesWithSqlJoin(todoId: string): Promise<TodoListWithRelations | null>;
}
