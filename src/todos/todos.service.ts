import { Injectable } from '@nestjs/common';

const TODOS = [
  {
    id: 1,
    isDone: false,
    title: 'Todo 1',
  },
];

@Injectable()
export class TodosService {
  finAll() {
    return TODOS;
  }
}
