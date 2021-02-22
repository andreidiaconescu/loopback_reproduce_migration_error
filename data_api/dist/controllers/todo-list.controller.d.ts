import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { TodoList, TodoListWithRelations } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListController {
    todoListRepository: TodoListRepository;
    constructor(todoListRepository: TodoListRepository);
    create(todoList: Omit<TodoList, 'id'>): Promise<TodoList>;
    count(where?: Where<TodoList>): Promise<Count>;
    find(filter?: Filter<TodoList>): Promise<TodoList[]>;
    updateAll(todoList: TodoList, where?: Where<TodoList>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<TodoList>): Promise<TodoList>;
    updateById(id: string, todoList: TodoList): Promise<void>;
    replaceById(id: string, todoList: TodoList): Promise<void>;
    deleteById(id: string): Promise<void>;
    /**
     * Example of sql query with join and return models
    */
    todoListAndSubEntitiesWithSqlJoin(id: string): Promise<TodoListWithRelations | null>;
}
