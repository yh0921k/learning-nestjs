import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 다른 모듈에서는 ConfigModule 임포트 불필요
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
