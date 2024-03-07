import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateBoardDto {
  id?: number;

  @MinLength(2)
  @MaxLength(10)
  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: '홍길동',
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: '내용',
    required: true,
    example: '안녕하세요',
  })
  content: string;
}
