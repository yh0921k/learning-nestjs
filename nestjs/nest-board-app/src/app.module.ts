import { Module } from '@nestjs/common';
import { BoardModule } from './boards/board.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './configs/typeorm.config';

@Module({
  imports: [BoardModule, TypeOrmModule.forRoot(typeormConfig)],
})
export class AppModule {}
