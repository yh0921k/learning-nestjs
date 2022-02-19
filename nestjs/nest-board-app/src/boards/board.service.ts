import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { UserEntity } from '../auth/user.entity';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(BoardRepository) private boardRepository: BoardRepository,
  ) {}

  async getBoardById(id: number): Promise<BoardEntity> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException('게시글을 찾을 수 없습니다.');
    }

    return found;
  }

  createBoard(
    user: UserEntity,
    createBoardDto: CreateBoardDto,
  ): Promise<BoardEntity> {
    return this.boardRepository.createBoard(user, createBoardDto);
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);
    console.log('result : ', result);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updateBoardStatus(
    id: number,
    status: BoardStatus,
  ): Promise<BoardEntity> {
    const board = await this.getBoardById(id);

    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }

  async getAllBoards(): Promise<BoardEntity[]> {
    return this.boardRepository.find();
  }
}
