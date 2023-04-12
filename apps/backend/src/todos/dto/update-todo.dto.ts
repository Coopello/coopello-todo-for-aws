import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty({
    message: 'isDaneを入力してください。',
  })
  @ApiProperty({
    example: false,
  })
  isDone: boolean;

  @IsNotEmpty({
    message: 'titleを入力してください。',
  })
  @ApiProperty({
    example: 'Todo edited',
  })
  title: string;
}
