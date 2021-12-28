import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ApiOperation } from '@nestjs/swagger';
import { CommentsCreateDto } from './dto/comments.create.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiOperation({ summary: '모든 댓글 조회' })
  @Get()
  async getAllComments() {
    return this.commentsService.getAllCommments();
  }

  @ApiOperation({ summary: '댓글 등록' })
  @Post(':id')
  async createComment(@Param() id: string, @Body() body: CommentsCreateDto) {
    return this.commentsService.createComment(id, body);
  }

  @ApiOperation({ summary: '좋아요' })
  @Patch(':id')
  async plusLike(@Param() id: string) {
    return this.commentsService.plusLike(id);
  }
}
