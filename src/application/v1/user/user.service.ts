import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserPayloadCreate } from './user.type';

@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity) private userRepo : Repository<UserEntity>
  ){}

  public async create(payload : UserPayloadCreate){
    const data = await this.userRepo.create(payload)
  
    return await this.userRepo.save(data)
  }

  public async find(id:number){
    return await this.userRepo.findOne(id)
  }

}
