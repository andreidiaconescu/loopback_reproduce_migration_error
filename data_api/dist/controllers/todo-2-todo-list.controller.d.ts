import { Todo2, TodoList } from '../models';
import { Todo2Repository } from '../repositories';
export declare class Todo2TodoListController {
    todo2Repository: Todo2Repository;
    constructor(todo2Repository: Todo2Repository);
    getTodoList(id: typeof Todo2.prototype.id): Promise<TodoList>;
}
