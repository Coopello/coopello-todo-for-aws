import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({
    example: false,
  })
  isDone: boolean;

  @ApiProperty({
    example: 'Todo edited',
  })
  title: string;
}
