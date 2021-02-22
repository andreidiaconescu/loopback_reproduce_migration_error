import { Entity } from '@loopback/repository';
import { Todo2, Todo2WithRelations } from './todo2.model';
export declare class TodoList extends Entity {
    id?: string;
    title: string;
    color?: string;
    todo2s: Todo2[];
    constructor(data?: Partial<TodoList>);
}
export interface TodoListRelations {
    todos2?: Todo2WithRelations[];
}
export declare type TodoListWithRelations = TodoList & TodoListRelations;
