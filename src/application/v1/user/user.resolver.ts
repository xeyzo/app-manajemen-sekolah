import { BadRequestException, InternalServerErrorException, PayloadTooLargeException} from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { userInfo } from 'node:os';
import { UserEntity } from 'src/entities/user.entity';
import { isCanGetData } from 'src/infrastructure/utils/check-arg';
import { badRequestError } from 'src/infrastructure/utils/exception';
import { Repository } from 'typeorm';
import { UserService } from './user.service';
import { UserPayloadCreate } from './user.type';


@Resolver()
export class UserResolver {
  constructor(
      private readonly userService : UserService,
      @InjectRepository(UserEntity) private userRepo : Repository<UserEntity>
  ){}

  @Mutation(returns => UserEntity)
  async signIn(
    @Args('payload') payload : UserPayloadCreate,
    @Context('user') user : UserEntity
  ){
   
      if(await this.userService.findUsernName(payload.userName)){
        badRequestError("username sudah digunakan")
      }

      const dPassword = payload.password
      const hashPassword = await this.userService.hashPassword(dPassword)

      return await this.userService.create(payload,hashPassword)
    }
  
  @Query(returns => UserEntity)
  async getUser(
    @Args('id') id : number
  ){
    return await this.userService.read(id)
  }
  
}