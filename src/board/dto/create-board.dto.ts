import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class createBoardDto {
  id?: number;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(10)
  title: string;

  @IsNotEmpty()
  content: string;
}
