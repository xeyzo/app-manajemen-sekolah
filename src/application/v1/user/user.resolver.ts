import { BadRequestException, InternalServerErrorException, PayloadTooLargeException, UseGuards} from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';
import { AuthGuard } from 'src/infrastructure/guard/auth-guard';
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
  async registerUser(
    @Args('payload') payload : UserPayloadCreate
    ){
   
      if(await this.userService.findUsernName(payload.userName)){
        badRequestError("username sudah digunakan")
      }

      const dPassword = payload.password
      const hashPassword = await this.userService.hashPassword(dPassword)

      return await this.userService.create(payload,hashPassword)
    }
  
  
  @UseGuards(new AuthGuard())
  @Query(returns => UserEntity)
  async profilUser(
    @Args('id') id : number
  ){
    return await this.userService.findUser(id)
  }
  
}