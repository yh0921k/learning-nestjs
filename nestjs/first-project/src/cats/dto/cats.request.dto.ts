import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// 데코레이터 사용 및 인터페이스 구현 등의 재사용성 높이기 위해 클래스로 선언
export class CatRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
