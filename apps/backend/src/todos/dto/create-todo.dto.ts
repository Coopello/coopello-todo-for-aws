import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({
    message: 'titleを入力してください。',
  })
  @ApiProperty({
    example: 'Todo',
  })
  title: string;
}
