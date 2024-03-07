import {
  Body,
  Controller,
  Delete,
  Get,
  Injectable,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';
import { createBoardDto } from './dto/create-board.dto';

@Controller('board')
@ApiTags('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return `find id:${id}`;
  }

  @Post()
  create(@Body() data: createBoardDto) {
    return this.boardService.create(data);
  }

  @Put()
  update(@Param('id') id: number, @Body() data: any) {
    return this.boardService.update(Number(id), data);
  }

  @Delete()
  remove(@Param('id') id: number) {
    return this.boardService.remove(Number(id));
  }
}
