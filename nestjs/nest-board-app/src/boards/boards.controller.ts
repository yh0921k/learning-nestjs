import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardEntity } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get(':id')
  getBoardById(@Param('id') id: string): Promise<BoardEntity> {
    return this.boardsService.getBoardById(id);
  }

  // @Get()
  // getAllTask(): Board[] {
  //   return this.boardsService.getAllBoards();
  // }
  //
  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   console.log(createBoardDto.title);
  //   console.log(createBoardDto.description);
  //
  //   return this.boardsService.createBoard(createBoardDto);
  // }
  //
  // @Delete(':id')
  // deleteBoard(@Param('id') id: string): void {
  //   this.boardsService.deleteBoard(id);
  // }
  //
  // @Patch(':id')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardsService.updateBoardStatus(id, status);
  // }
}
