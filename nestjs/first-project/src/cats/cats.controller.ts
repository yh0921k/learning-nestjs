import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseFloatPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { PositiveIntPipe } from '../common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from '../common/interceptors/success.interceptor';

@Controller('cats')
@UseFilters(HttpExceptionFilter)
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  // @UseFilters(HttpExceptionFilter)
  getAllCat() {
    //throw new HttpException('API is broken', 401);

    console.log('Hello Controller');
    return { cats: 'get all api cat' };
  }

  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return ' update';
  }

  @Delete(':id')
  deleteCat() {
    const arr: number[] = [1, 2, 3, 4, 5];
    return 'delete cat';
  }
}
