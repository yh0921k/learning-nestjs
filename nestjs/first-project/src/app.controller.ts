import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 데코레이터 : 함수나 클래스에 특정 기능 첨가하여 재사용성 극대화
  // @Get() === @Get('/')
  // localhost:8000/cats/hello
  @Get('hello/:id/:name')
  getHello(
    @Req() req: Request,
    @Body() body,
    @Param() param: { id: string; name: string },
  ): string {
    // 서비스의 반환은 모듈로 들어가고 NextFactory 모듈로 이어짐
    console.log(req);
    console.log(param);
    return this.appService.getHello();
  }
}
