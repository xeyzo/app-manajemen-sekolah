import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
import { UserPayloadCreate } from './user.type';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
  constructor(
      @InjectRepository(UserEntity) private userRepo : Repository<UserEntity>
  ){}

  public async create(payload : UserPayloadCreate, password:string){
    const data = await this.userRepo.create({
      ...payload,
      password,
    })
  
    return await this.userRepo.save(data)
  }

  public async read(id:number){
    return await this.userRepo.findOne(id)
  }

  public async findUsernName(username : string){
    const user = await this.userRepo.findOne({
      userName : username
    });

    return user;
  } 

  public async hashPassword(password:string){
    const salt = bcrypt.genSaltSync(10);

    var hash = bcrypt.hashSync(password, salt);

    return hash
  }

}
