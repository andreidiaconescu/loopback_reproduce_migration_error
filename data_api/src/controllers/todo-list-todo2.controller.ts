import {Count, CountSchema, Filter, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, getWhereSchemaFor, param, patch, post, requestBody} from '@loopback/rest';
import {Todo2, TodoList} from '../models';
import {TodoListRepository} from '../repositories';

export class TodoListTodo2Controller {
  constructor(@repository(TodoListRepository) protected todoListRepository: TodoListRepository) {}

  @get('/todo-lists/{id}/todo2s', {
    responses: {
      '200': {
        description: 'Array of TodoList has many Todo2',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Todo2)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: string,
    @param.query.object('filter') filter?: Filter<Todo2>,
  ): Promise<Todo2[]> {
    return this.todoListRepository.todo2s(id).find(filter);
  }

  @post('/todo-lists/{id}/todo2s', {
    responses: {
      '200': {
        description: 'TodoList model instance',
        content: {'application/json': {schema: getModelSchemaRef(Todo2)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof TodoList.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo2, {
            title: 'NewTodo2InTodoList',
            exclude: ['id'],
            optional: ['todoListId'],
          }),
        },
      },
    })
    todo2: Omit<Todo2, 'id'>,
  ): Promise<Todo2> {
    return this.todoListRepository.todo2s(id).create(todo2);
  }

  @patch('/todo-lists/{id}/todo2s', {
    responses: {
      '200': {
        description: 'TodoList.Todo2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo2, {partial: true}),
        },
      },
    })
    todo2: Partial<Todo2>,
    @param.query.object('where', getWhereSchemaFor(Todo2)) where?: Where<Todo2>,
  ): Promise<Count> {
    return this.todoListRepository.todo2s(id).patch(todo2, where);
  }

  @del('/todo-lists/{id}/todo2s', {
    responses: {
      '200': {
        description: 'TodoList.Todo2 DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Todo2)) where?: Where<Todo2>,
  ): Promise<Count> {
    return this.todoListRepository.todo2s(id).delete(where);
  }
}
