import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // 데코레이터 : 함수나 클래스에 특정 기능 첨가하여 재사용성 극대화
  // @Get() === @Get('/')
  @Get()
  getHello(): string {
    // 서비스의 반환은 모듈로 들어가고 NextFactory 모듈로 이어짐
    return this.appService.getHello();
  }
}
