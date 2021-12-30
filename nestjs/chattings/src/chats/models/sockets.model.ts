import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty, IsString } from 'class-validator';
import { Document, SchemaOptions } from 'mongoose';

const options: SchemaOptions = {
  id: false, // 몽구스의 _id 필드와 id 필드를 따로 사용하기 위해 사용
  collection: 'sockets', // 이름을 설정하지 않으면 class name을 소문자로 변환후 + 's'
  timestamps: true,
};

@Schema(options)
export class Socket extends Document {
  @Prop({
    unique: true,
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  id: string;

  @Prop({
    required: true,
  })
  @IsNotEmpty()
  @IsString()
  username: string;
}

export const SocketSchema = SchemaFactory.createForClass(Socket);
