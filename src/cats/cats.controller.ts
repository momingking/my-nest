import { Controller, Get, Post, Param } from '@nestjs/common';
@Controller('cats')
export class catsController {
  @Get()
  findAll(@Param('id') id: number): string {
    return 'This action returns all cats' + ' ' + id;
  }

  @Get(':id')
  creatCat(@Param('id') id: string): string {
    return 'This action creates a new cat' + id;
  }
}
