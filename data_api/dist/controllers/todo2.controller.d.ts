import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Todo2 } from '../models';
import { Todo2Repository } from '../repositories';
export declare class Todo2Controller {
    todo2Repository: Todo2Repository;
    constructor(todo2Repository: Todo2Repository);
    create(todo2: Omit<Todo2, 'id'>): Promise<Todo2>;
    count(where?: Where<Todo2>): Promise<Count>;
    find(filter?: Filter<Todo2>): Promise<Todo2[]>;
    updateAll(todo2: Todo2, where?: Where<Todo2>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Todo2>): Promise<Todo2>;
    updateById(id: string, todo2: Todo2): Promise<void>;
    replaceById(id: string, todo2: Todo2): Promise<void>;
    deleteById(id: string): Promise<void>;
    findByCompleteStatus(completeStatus: boolean, filter?: FilterExcludingWhere<Todo2>): Promise<Todo2[]>;
    findByCompleteStatusWithSql(completeStatus: boolean, filter?: FilterExcludingWhere<Todo2>): Promise<Todo2[]>;
}
