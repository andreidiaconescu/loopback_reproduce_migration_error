import {Entity, hasMany, model, property} from '@loopback/repository';
import {Todo2, Todo2WithRelations} from './todo2.model';

@model()
export class TodoList extends Entity {
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
    required: true,
    postgresql: {
      columnName: 'title',
      dataType: 'character varying',
      dataLength: 500,
      nullable: 'NO',
    },
  })
  title: string;

  @property({
    type: 'string',
    postgresql: {
      columnName: 'color',
      dataType: 'character varying',
      dataLength: 100,
      nullable: 'YES',
    },
  })
  color?: string;

  @hasMany(() => Todo2)
  todo2s: Todo2[];

  constructor(data?: Partial<TodoList>) {
    super(data);
  }
}

export interface TodoListRelations {
  // describe navigational properties here
  todos2?: Todo2WithRelations[];
}

export type TodoListWithRelations = TodoList & TodoListRelations;
