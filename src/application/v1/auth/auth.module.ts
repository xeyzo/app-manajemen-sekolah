import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from '../user/user.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [AuthService, AuthResolver, UserService]
})
export class AuthModule {}
