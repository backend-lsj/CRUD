import { MaxLength, MinLength } from 'class-validator';

export class UpdateBoardDto {
  @MinLength(2)
  @MaxLength(10)
  title: string;

  content: string;
}
