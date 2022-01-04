import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('alive')
  alive(@Res({ passthrough: true }) response: Response) {
    response.status(200);
    return;
  }
}
