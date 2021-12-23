import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hisCatServiceProduct() {
    return 'hello cat';
  }
}
