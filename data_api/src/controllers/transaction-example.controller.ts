// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {getModelSchemaRef, param, post} from '@loopback/rest';
import {User} from '../models';
import {UserRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class TransactionExampleController {
  constructor(    @repository(UserRepository)
  public userRepository: UserRepository,
) {}

  @post('/transaction-update-user/{id}', {
    responses: {
      '200': {
        description: 'Updated User model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User, {includeRelations: false}),
          },
        },
      },
    },
  })
  async transactionUpdateUser(@param.path.string('id') id: string): Promise<User | null> {
    return this.userRepository.transactionUpdateUser(id);
  }

}
