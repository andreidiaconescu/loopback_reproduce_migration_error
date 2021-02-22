import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
    postgresql: {
      columnName: 'id',
      dataType: 'uuid',
      nullable: 'NO',
    },
  })
  id?: string;

  @property({
    type: 'string',
  })
  realm?: string;

  @property({
    type: 'string',
  })
  username?: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'email',
      dataType: 'character varying',
      dataLength: 100,
      nullable: 'NO',
    },
  })
  email: string;

  @property({
    type: 'string',
    required: true,
    postgresql: {
      columnName: 'password',
      dataType: 'character varying',
      dataLength: 100,
      nullable: 'NO',
    },
  })
  password: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'emailVerified',
      dataType: 'boolean',
      nullable: 'YES',
    },
  })
  emailVerified?: boolean;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'verificationToken',
      dataType: 'character varying',
      dataLength: 500,
      nullable: 'YES',
    },
  })
  verificationToken?: string;

  @property({
    type: 'date',
    postgresql: {
      columnName: 'randomDate',
      dataType: 'TIMESTAMP WITH TIME ZONE',
      nullable: 'YES',
    },
  })
  randomDate?: Date;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
