import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

// 필요없는 필드를 제외할 때 OmitType을 사용할 수 있음
export class ReadOnlyCatDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '61c815e8e3085c6dec04c45c',
    description: 'id',
  })
  id: string;
}
