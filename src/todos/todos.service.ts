import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';

@Injectable()
export class TodosService {
  private todos: Todo[] = [
    {
      id: 1,
      isDone: false,
      title: 'Todo 1',
    },
  ];

  finAll() {
    return this.todos;
  }

  create(todo: Pick<Todo, 'title'>) {
    const maxId = this.todos.at(-1).id;
    const newTodo = {
      id: maxId + 1,
      isDone: false,
      title: todo.title,
    };
    this.todos = [...this.todos, newTodo].sort((a, b) => a.id - b.id);

    return newTodo;
  }

  update(id: number, todo: Pick<Todo, 'title' | 'isDone'>) {
    const newTodo = {
      id,
      ...todo,
    };

    this.todos = [...this.todos.filter((todo) => todo.id !== id), newTodo].sort(
      (a, b) => a.id - b.id,
    );

    return newTodo;
  }
}
