import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Res,
  UseFilters,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { UnauthenticationException } from './commons/exception/unauthentication.exception';
import { HttpExceptionFilter } from './commons/exception/http-exception.filter';

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

  @Get('/exception-filter')
  @UseFilters(new HttpExceptionFilter())
  exception_filter() {
    throw new UnauthenticationException();
  }
}
