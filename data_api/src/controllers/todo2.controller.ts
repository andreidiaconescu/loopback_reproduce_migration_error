import {Count, CountSchema, Filter, FilterExcludingWhere, repository, Where} from '@loopback/repository';
import {del, get, getModelSchemaRef, param, patch, post, put, requestBody} from '@loopback/rest';
import {Todo2} from '../models';
import {Todo2Repository} from '../repositories';

export class Todo2Controller {
  constructor(
    @repository(Todo2Repository)
    public todo2Repository: Todo2Repository,
  ) {}

  @post('/todo2s', {
    responses: {
      '200': {
        description: 'Todo2 model instance',
        content: {'application/json': {schema: getModelSchemaRef(Todo2)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo2, {
            title: 'NewTodo2',
            exclude: ['id'],
          }),
        },
      },
    })
    todo2: Omit<Todo2, 'id'>,
  ): Promise<Todo2> {
    return this.todo2Repository.create(todo2);
  }

  @get('/todo2s/count', {
    responses: {
      '200': {
        description: 'Todo2 model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.where(Todo2) where?: Where<Todo2>): Promise<Count> {
    return this.todo2Repository.count(where);
  }

  @get('/todo2s', {
    responses: {
      '200': {
        description: 'Array of Todo2 model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Todo2, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(@param.filter(Todo2) filter?: Filter<Todo2>): Promise<Todo2[]> {
    return this.todo2Repository.find(filter);
  }

  @patch('/todo2s', {
    responses: {
      '200': {
        description: 'Todo2 PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo2, {partial: true}),
        },
      },
    })
    todo2: Todo2,
    @param.where(Todo2) where?: Where<Todo2>,
  ): Promise<Count> {
    return this.todo2Repository.updateAll(todo2, where);
  }

  @get('/todo2s/{id}', {
    responses: {
      '200': {
        description: 'Todo2 model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Todo2, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Todo2, {exclude: 'where'}) filter?: FilterExcludingWhere<Todo2>,
  ): Promise<Todo2> {
    return this.todo2Repository.findById(id, filter);
  }

  @patch('/todo2s/{id}', {
    responses: {
      '204': {
        description: 'Todo2 PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Todo2, {partial: true}),
        },
      },
    })
    todo2: Todo2,
  ): Promise<void> {
    await this.todo2Repository.updateById(id, todo2);
  }

  @put('/todo2s/{id}', {
    responses: {
      '204': {
        description: 'Todo2 PUT success',
      },
    },
  })
  async replaceById(@param.path.string('id') id: string, @requestBody() todo2: Todo2): Promise<void> {
    await this.todo2Repository.replaceById(id, todo2);
  }

  @del('/todo2s/{id}', {
    responses: {
      '204': {
        description: 'Todo2 DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.todo2Repository.deleteById(id);
  }

  @get('/todo2s/findByCompleteStatus/{completeStatus}', {
    responses: {
      '200': {
        description: 'Array of Todo2 models instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Todo2, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async findByCompleteStatus(
    @param.path.boolean('completeStatus') completeStatus: boolean,
    @param.filter(Todo2, {exclude: 'where'}) filter?: FilterExcludingWhere<Todo2>,
  ): Promise<Todo2[]> {
    return this.todo2Repository.findByCompleteStatus(completeStatus, filter);
  }

  @get('/todo2s/findByCompleteStatusWithSql/{completeStatus}', {
    responses: {
      '200': {
        description: 'Array of Todo2 models instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Todo2, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async findByCompleteStatusWithSql(
    @param.path.boolean('completeStatus') completeStatus: boolean,
    @param.filter(Todo2, {exclude: 'where'}) filter?: FilterExcludingWhere<Todo2>,
  ): Promise<Todo2[]> {
    return this.todo2Repository.findByCompleteStatusWithSql(completeStatus, filter);
  }
}
