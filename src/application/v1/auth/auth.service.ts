import { Injectable } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { LoginPayload } from './auth.type';
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private userRepo : Repository<UserEntity>
  ){}

  public async createUser(payload : LoginPayload){
    const data = this.userRepo.create(payload)

    return this.userRepo.save(data)
  }

  
  public async createToken(payload: LoginPayload){
    return jwt.sign(payload, 'secret')    
  } 

}
