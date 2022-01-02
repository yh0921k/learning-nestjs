import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200);
    //.expect('Hello World!');
  });

  describe('설명', () => {
    // test와 it은 동일
    test('two plus two is four', () => {
      expect(2 + 2).toBe(4);
    });
  });

  describe('/users', () => {
    it('/users (GET)', async () => {
      const res = await request(app.getHttpServer()).get('/users'); //.expect(401);
      expect(res.statusCode).toBe(401);
    });

    it('/users (POST)', async () => {
      const res = await request(app.getHttpServer()).post('/users').send({
        email: 'jest@gmail.com',
        password: 'jest',
        username: 'jest',
      });

      expect(res.statusCode).toBe(401);
      // console.log(res.body);
      // expect(res.body).toBe({
      //   email: 'jest@gmail.com',
      //   username: 'jest',
      //   id: '94778428-cfd3-4524-96c1-0a604c726c4f',
      //   createdAt: '2022-01-02T09:28:49.131Z',
      //   updatedAt: '2022-01-02T09:28:49.131Z',
      // });
    });
  });

  it('/users/login (POST)', async () => {
    const res = await request(app.getHttpServer()).post('/users/login').send({
      email: 'jest@gmail.com',
      password: 'jest',
    });

    expect(res.statusCode).toBe(200);
    console.log(res.headers);
  });
});
