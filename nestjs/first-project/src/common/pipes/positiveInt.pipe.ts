// 요청 파라미터가 부동 소수점, 음수 등으로 들어올 경우 변환하는 파이프

import { HttpException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number): number {
    if (value < 0) {
      throw new HttpException('value must be > 0', 400);
    }

    return value;
  }
}
