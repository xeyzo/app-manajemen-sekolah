import { InternalServerErrorException, PayloadTooLargeException} from '@nestjs/common';
import { Args, Context, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UserEntity } from 'src/entities/user.entity';
import { UserService } from './user.service';
import { UserPayloadCreate } from './user.type';


@Resolver()
export class UserResolver {
  constructor(
      private readonly userService : UserService
  ){}

  @Mutation(returns => UserEntity)
  async signIn(
    @Args('payload') payload : UserPayloadCreate
    ){
      const password = payload.password
      return await this.userService.create(payload)
    }
  
  @Query(returns => UserEntity)
  async getUser(
    @Args('id') id : number
  ){
    return await this.userService.find(id)
  }
  
}
