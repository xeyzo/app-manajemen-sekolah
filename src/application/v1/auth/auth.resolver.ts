import { Args, Mutation, Resolver } from '@nestjs/graphql';
import e from 'express';
import { UserEntity } from 'src/entities/user.entity';
import { badRequestError, succesRequest } from 'src/infrastructure/utils/exception';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginPayload } from './auth.type';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly userService : UserService,
    private readonly authService : AuthService

  ){}

  @Mutation(returns => String)
  async loginUser(
    @Args('loginPayload') loginPayload : LoginPayload
  ){
    let user = await this.userService.findUsernName(loginPayload.userName)

    if(user!){
      return this.authService.createToken(user)
    }else{
      badRequestError('akun yang anda masukan belum terdaftar')
    }

  }
}
