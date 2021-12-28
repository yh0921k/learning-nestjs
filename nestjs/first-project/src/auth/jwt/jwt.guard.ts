import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// AuthGuard -> jwt.strategy.ts를 실행해줌
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
