import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository, FilterExcludingWhere } from '@loopback/repository';
import { DbpostgresDataSource } from '../datasources';
import { Todo2, Todo2Relations, TodoList } from '../models';
import { TodoListRepository } from './todo-list.repository';
export declare class Todo2Repository extends DefaultCrudRepository<Todo2, typeof Todo2.prototype.id, Todo2Relations> {
    protected todoListRepositoryGetter: Getter<TodoListRepository>;
    readonly todoList: BelongsToAccessor<TodoList, typeof Todo2.prototype.id>;
    constructor(dataSource: DbpostgresDataSource, todoListRepositoryGetter: Getter<TodoListRepository>);
    findByCompleteStatus(completeStatus: boolean, filter?: FilterExcludingWhere<Todo2>): Promise<Todo2[]>;
    findByCompleteStatusWithSql(completeStatus: boolean, filter?: FilterExcludingWhere<Todo2>): Promise<Todo2[]>;
}
