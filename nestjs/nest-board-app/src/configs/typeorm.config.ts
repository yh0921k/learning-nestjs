import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: '218.155.184.17',
  port: 13306,
  username: 'blockodyssey',
  password: '1234',
  database: 'board',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // set 'false' in production
  autoLoadEntities: true,
  logging: false, // set 'false' in production
  keepConnectionAlive: true,
};
