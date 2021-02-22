import {belongsTo, Entity, model, property} from '@loopback/repository';
import {TodoList, TodoListWithRelations} from './todo-list.model';
@model({
  settings: {
    foreignKeys: {
      fk_todo2_todolist: {
        name: 'fk_todo2_todolist',
        entity: 'TodoList',
        entityKey: 'id',
        foreignKey: 'todoListId',
      },
    },
  },
})
export class Todo2 extends Entity {
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
    required: true,
    postgresql: {
      columnName: 'desc',
      dataType: 'character varying',
      dataLength: 500,
      nullable: 'YES',
    },
  })
  desc: string;

  @property({
    type: 'boolean',
    postgresql: {
      columnName: 'isComplete',
      dataType: 'boolean',
      nullable: 'YES',
    },
  })
  isComplete?: boolean;

  @belongsTo(() => TodoList, undefined, {
    type: 'string',
    postgresql: {
      columnName: 'todoListId',
      dataType: 'uuid',
      nullable: 'NO',
    },
  })
  todoListId: string;

  constructor(data?: Partial<Todo2>) {
    super(data);
  }
}

export interface Todo2Relations {
  // describe navigational properties here
  todoList?: TodoListWithRelations;
}

export type Todo2WithRelations = Todo2 & Todo2Relations;
