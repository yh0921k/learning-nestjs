import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { UnauthenticationException } from './commons/exception/unauthentication.exception';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('alive')
  alive(@Res({ passthrough: true }) response: Response) {
    response.status(200);
    return;
  }

  @Get('/exception')
  exception() {
    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get('/custom-exception')
  custom_exception() {
    throw new UnauthenticationException();
  }
}
