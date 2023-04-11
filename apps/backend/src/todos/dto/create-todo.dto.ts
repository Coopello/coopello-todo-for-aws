import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    default: 'Todo',
  })
  title: string;
}
