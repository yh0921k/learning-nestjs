import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { AuthCredentialDto } from './dto/auth.credential.dto';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const user = await this.create({ username, password });
    await this.save(user);
  }
}
