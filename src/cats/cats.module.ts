import { Module } from '@nestjs/common';
import { catsController } from './cats.controller';

@Module({
  controllers: [catsController],
})
export class CatsModule {}
