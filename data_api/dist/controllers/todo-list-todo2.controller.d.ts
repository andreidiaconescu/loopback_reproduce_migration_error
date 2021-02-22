import { Count, Filter, Where } from '@loopback/repository';
import { Todo2, TodoList } from '../models';
import { TodoListRepository } from '../repositories';
export declare class TodoListTodo2Controller {
    protected todoListRepository: TodoListRepository;
    constructor(todoListRepository: TodoListRepository);
    find(id: string, filter?: Filter<Todo2>): Promise<Todo2[]>;
    create(id: typeof TodoList.prototype.id, todo2: Omit<Todo2, 'id'>): Promise<Todo2>;
    patch(id: string, todo2: Partial<Todo2>, where?: Where<Todo2>): Promise<Count>;
    delete(id: string, where?: Where<Todo2>): Promise<Count>;
}
