import { HttpException, HttpStatus } from '@nestjs/common';

export class UnauthenticationException extends HttpException {
  constructor() {
    super('UnAuthenticated', HttpStatus.NOT_FOUND);
  }
}
