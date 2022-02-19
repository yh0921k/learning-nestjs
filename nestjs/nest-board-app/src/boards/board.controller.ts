import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardEntity } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { BoardStatus } from './board-status.enum';
import { AuthGuard } from '@nestjs/passport';
import { UserEntity } from '../auth/user.entity';
import { CurrentUser } from '../auth/current-user.decoretor';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardController {
  constructor(private boardsService: BoardService) {
    this.boardsService = boardsService;
  }

  @Get(':id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<BoardEntity> {
    return this.boardsService.getBoardById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(
    @CurrentUser() user: UserEntity,
    @Body() createBoardDto: CreateBoardDto,
  ): Promise<BoardEntity> {
    return this.boardsService.createBoard(user, createBoardDto);
  }

  @Delete(':id')
  deleteBoard(
    @CurrentUser() user: UserEntity,
    @Param('id', ParseIntPipe) id: number,
  ): Promise<void> {
    return this.boardsService.deleteBoard(user, id);
  }

  @Patch(':id')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ): Promise<BoardEntity> {
    return this.boardsService.updateBoardStatus(id, status);
  }

  @Get()
  getAllBoards(@CurrentUser() user: UserEntity): Promise<BoardEntity[]> {
    return this.boardsService.getAllBoards(user);
  }
}
