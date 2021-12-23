import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class SuccessInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('Before...');

    // const now = Date.now();
    return next.handle().pipe(
      map((data) => ({
        success: true,
        data,
      })),
    );
    //.pipe(tap(() => console.log(`After... ${Date.now() - now}ms`)));
  }
}
