import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenusService {
  create(createMenuDto: CreateMenuDto) {
    return 'This action adds a new menu' + createMenuDto;
  }

  findAll() {
    return `This action returns all menus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    console.log(updateMenuDto);

    return `This action updates a #${id} menu ${updateMenuDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
