import { EntityRepository, Repository } from 'typeorm';
import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

@EntityRepository(BoardEntity)
export class BoardRepository extends Repository<BoardEntity> {
  async createBoard(createBoardDto: CreateBoardDto): Promise<BoardEntity> {
    const { title, description } = createBoardDto;

    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });

    // from BaseEntity
    // await board.save()

    return await this.save(board);
  }
}
