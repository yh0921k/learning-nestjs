import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  getAllTask(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  createBoard(@Body() boardCreateRequest): Board {
    console.log(boardCreateRequest.title);
    console.log(boardCreateRequest.description);

    return this.boardsService.createBoard(
      boardCreateRequest.title,
      boardCreateRequest.description,
    );
  }

  // @Post()
  // createBoard(
  //   @Body('title') title: string,
  //   @Body('description') description: string,
  // ): Board {
  //   console.log(title);
  //   console.log(description);
  //
  //   return this.boardsService.createBoard(title, description);
  // }
}
