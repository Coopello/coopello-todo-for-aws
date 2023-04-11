import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({
    default: false,
  })
  isDone: boolean;

  @ApiProperty({
    default: 'Todo edited',
  })
  title: string;
}
