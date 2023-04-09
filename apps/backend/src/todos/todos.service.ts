import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';
import { prisma } from 'src/libs/prisma';

@Injectable()
export class TodosService {
  async finAll() {
    return await prisma.todo.findMany();
  }

  async create(todo: Pick<Todo, 'title'>) {
    const newTodo = await prisma.todo.create({
      data: todo,
    });

    return newTodo;
  }

  async update(id: number, todo: Pick<Todo, 'title' | 'isDone'>) {
    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: todo,
    });

    return updatedTodo;
  }

  async delete(id: number) {
    const targetTodoCount = await prisma.todo.count({
      where: {
        id,
      },
    });

    if (targetTodoCount === 0) {
      return '指定されたtodoは存在しませんでした。';
    }

    await prisma.todo.delete({
      where: {
        id,
      },
    });

    return `idが${id}のtodoを削除しました。`;
  }
}
