import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';

@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(title: string, description: string): Board {
    const board: Board = {
      id: uuid(),
      title: title,

      // 이와 같이 프로퍼티명을 명시하지 않으면 파라미터의 이름과 동일한 프로퍼티가 생성된다.
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }
}
