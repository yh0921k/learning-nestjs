import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {
    this.boardsService = boardsService;
  }

  @Get()
  getAllTask() {
    return this.boardsService.getAllBoards();
  }
}
