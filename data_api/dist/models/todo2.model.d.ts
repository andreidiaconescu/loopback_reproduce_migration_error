import { Entity } from '@loopback/repository';
import { TodoListWithRelations } from './todo-list.model';
export declare class Todo2 extends Entity {
    id?: string;
    title: string;
    desc: string;
    isComplete?: boolean;
    todoListId: string;
    constructor(data?: Partial<Todo2>);
}
export interface Todo2Relations {
    todoList?: TodoListWithRelations;
}
export declare type Todo2WithRelations = Todo2 & Todo2Relations;
