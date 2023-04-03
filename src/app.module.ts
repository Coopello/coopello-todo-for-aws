import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosController } from './todos/todos.controller';
import { TodosService } from './todos/todos.service';
import { TodosModule } from './todos/todos.module';
import { HogeModule } from './hoge/hoge.module';

@Module({
  imports: [TodosModule, HogeModule],
  controllers: [AppController, TodosController],
  providers: [AppService, TodosService],
})
export class AppModule {}
