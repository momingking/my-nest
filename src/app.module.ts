import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusModule } from './menus/menus.module';
import { CatsModule } from './cats/cats.module';
@Module({
  imports: [MenusModule, CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
