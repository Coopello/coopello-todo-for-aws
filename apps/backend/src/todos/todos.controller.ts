import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async findAll() {
    try {
      return await this.todosService.finAll();
    } catch (e) {
      return e;
    }
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    try {
      return await this.todosService.create(createTodoDto);
    } catch (e) {
      return e;
    }
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    try {
      return await this.todosService.update(Number(id), updateTodoDto);
    } catch (e) {
      return e;
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.todosService.delete(Number(id));
    } catch (e) {
      return e;
    }
  }
}
