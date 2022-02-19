import { EntityRepository, Repository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { UserEntity } from '../auth/user.entity';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
  async createBoard(
    user: UserEntity,
    createBoardDto: CreateBoardDto,
  ): Promise<BoardEntity> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });

    // from BaseEntity
    // await board.save()

    return await this.save(board);
  }
}
