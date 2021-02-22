import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Todo2,
  TodoList,
} from '../models';
import {Todo2Repository} from '../repositories';

export class Todo2TodoListController {
  constructor(
    @repository(Todo2Repository)
    public todo2Repository: Todo2Repository,
  ) { }

  @get('/todo2s/{id}/todo-list', {
    responses: {
      '200': {
        description: 'TodoList belonging to Todo2',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TodoList)},
          },
        },
      },
    },
  })
  async getTodoList(
    @param.path.number('id') id: typeof Todo2.prototype.id,
  ): Promise<TodoList> {
    return this.todo2Repository.todoList(id);
  }
}
