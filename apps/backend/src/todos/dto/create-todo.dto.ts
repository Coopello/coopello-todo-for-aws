import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({
    example: 'Todo',
  })
  title: string;
}
