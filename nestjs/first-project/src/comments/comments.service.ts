import { Injectable } from '@nestjs/common';
import { CommentsCreateDto } from './dto/comments.create.dto';

@Injectable()
export class CommentsService {
  async getAllCommments() {
    return 'Hello';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return 'Hello';
  }

  async plusLike(id: string) {
    return 'Plus Like';
  }
}
