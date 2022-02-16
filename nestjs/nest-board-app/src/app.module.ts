import { Module } from '@nestjs/common';
import { BoardModule } from './boards/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [BoardModule, AuthModule, TypeOrmModule.forRoot(typeormConfig)],
})
export class AppModule {}
