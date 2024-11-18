import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findHello(id: number): string {
    return `find in ${id}`;
  }
}
