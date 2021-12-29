import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AwsService } from './aws.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 전역 사용 설정
    }),
  ],
  controllers: [AppController],
  providers: [AwsService],
})
export class AppModule {}
