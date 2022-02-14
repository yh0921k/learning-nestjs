import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: string): Promise<BoardEntity> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }

    return found;
  }

  createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    return this.boardRepository.createBoard(createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    console.log('result : ', result);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  //
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
