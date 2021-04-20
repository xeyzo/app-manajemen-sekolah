import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserEntity])
  ],
  providers: [AuthService, AuthResolver]
})
export class AuthModule {}
