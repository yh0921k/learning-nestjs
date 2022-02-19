import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { JwtPayload } from './jwt.payload.interface';
import { UserEntity } from './user.entity';

// NestJS는 아래 데코레이터를 이용하여 서비스가 필요한 지점에서 해당 인스턴스를 의존성 주입할 수 있다.
@Injectable()

// 이 클래스는 @nestjs/passport에 존재하는 PassportStrategy 클래스를 상속한다.
// JWT 관련 Strategy는 passport-jwt에 구현되어 있으며, 개발자는 이를 전달한다.
export class JwtStrategy extends PassportStrategy(Strategy) {
  // 생성자에서는 상위 클래스에  두 개의 필수 파라미터를 전달한다.
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {
    super({
      // JWT가 사용할 비밀 키값을 설정한다.
      // JWT 토큰의 유효성을 검증하고, 페이로드에 접근하기 위해 해당 키값이 사용된다.
      secretOrKey: 'blockodyssey',

      // 현재 요청의 Authorization Header에서 JWT를 찾기 위해 아래와 같이 설정한다.
      // Bearer은 JWT 혹은 OAuth에 대한 토큰을 사용한다는 의미이다. -> (RFC 6750)
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  // 위에서 토큰의 유효성 검사가 완료되면, validate() 메서드에서 페이로드를 파싱해 사용자 정보를 가져온다.
  // 사용자 정보가 검증되면 해당 사용자 객체를 반환한다.
  // 반환된 사용자 정보는 @UseGuards(AuthGuard())를 이용한 모든 요청의 Request Body에 전달된다.
  async validate(payload: JwtPayload) {
    const { username } = payload;
    const user: UserEntity = await this.userRepository.findOne({ username });

    if (!user) {
      throw new UnauthorizedException('올바르지 않은 접근입니다.');
    }

    return user;
  }
}
