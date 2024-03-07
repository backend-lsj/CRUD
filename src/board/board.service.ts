import { Injectable } from '@nestjs/common';
import { createBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardService {
  private boards = [
    {
      id: 1,
      title: 'hello world',
      content: 'Content 1',
    },
    {
      id: 2,
      title: 'hello lsj',
      content: 'Content 2',
    },
    {
      id: 3,
      title: 'hello world3',
      content: 'Content 3',
    },
    {
      id: 4,
      title: 'hello world4',
      content: 'Content 4',
    },
    {
      id: 5,
      title: 'hello world5',
      content: 'Content 5',
    },
    {
      id: 6,
      title: 'hello world6',
      content: 'Content 6',
    },
    {
      id: 7,
      title: 'hello world7',
      content: 'Content 7',
    },
    {
      id: 8,
      title: 'hello world8',
      content: 'Content 8',
    },
    {
      id: 9,
      title: 'hello world9',
      content: 'Content 9',
    },
    {
      id: 10,
      title: 'hello world10',
      content: 'Content 10',
    },
  ];

  findAll() {
    return this.boards;
  }

  find(id: number) {
    const index = this.getBoardId(id);
    return this.boards[index];
  }

  create(data: createBoardDto) {
    const newBoard = { id: this.getNextId(), ...data };
    this.boards.push(newBoard);
    return newBoard;
  }

  update(id: number, data: createBoardDto) {
    const index = this.getBoardId(id);
    if (index > -1) {
      this.boards[index] = {
        ...this.boards[index],
        ...data,
      };
      return this.boards[index];
    }

    return null;
  }

  remove(id: number) {
    const index = this.getBoardId(id);
    if (index > -1) {
      const deleteBoard = this.boards[index];
      this.boards.splice(index, 1);
      return deleteBoard;
    }
    return null;
  }

  getNextId() {
    return this.boards.sort((a, b) => a.id - b.id)[0].id + 1;
  }

  getBoardId(id: number) {
    return this.boards.findIndex((board) => board.id === id);
  }
}
