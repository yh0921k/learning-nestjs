import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialDto } from './dto/auth.credential.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const salt = await bcrypt.genSalt();
    console.log('salt : ', salt);

    const hashedPassword = await bcrypt.hash(password, salt);
    console.log('hashed password : ', hashedPassword);

    const user = this.create({ username, password: hashedPassword });

    try {
      await this.save(user);
    } catch (error) {
      if (error.errno === 1062) {
        throw new ConflictException('해당 이름은 이미 사용중입니다.');
      } else {
        throw new InternalServerErrorException('백엔드 개발자에게 문의주세요.');
      }
    }
  }
}
