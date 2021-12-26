import { ApiProperty } from '@nestjs/swagger';

export class ReadOnlyCatDto {
  @ApiProperty({
    example: '61c815e8e3085c6dec04c45c',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: 'yh0921k@gmail.com',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: 'yonghwi',
    description: 'name',
  })
  name: string;
}
