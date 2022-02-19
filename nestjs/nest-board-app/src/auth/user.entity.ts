import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { BoardEntity } from '../boards/board.entity';

@Entity('user')
@Unique(['username'])
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany((type) => BoardEntity, (board) => board.user, { eager: true })
  boards: BoardEntity[];
}
