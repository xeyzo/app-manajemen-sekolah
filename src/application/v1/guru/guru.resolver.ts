import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { GuruEntity } from 'src/entities/guru.entity';
import { GuruService } from './guru.service';
import { CreateGuruPayload, UpdateGuruPayload } from './guru.type';

@Resolver(of => GuruEntity)
export class GuruResolver {
  constructor(
    private readonly guruService : GuruService
  ){};

  @Mutation(returns => GuruEntity)
  async createGuru(
    @Args('payload') payload : CreateGuruPayload 
  ){
    return await this.guruService.create(payload)
  };

  @Query(returns => GuruEntity)
  async getGuru(
    @Args('id') id : number
  ){
    return await this.guruService.find(id)
  };

  @Query(returns => [GuruEntity])
  async getAllGuru(){
    return await this.guruService.getAll()
  };

  @Mutation(returns => GuruEntity)
  async updateGuru(
    @Args('id') id : number,
    @Args('payload') payload : UpdateGuruPayload
  ){
    const data = await this.guruService.find(id)

    return await this.guruService.update(payload, data)
  };

  @Mutation(returns => Boolean)
  async deleteGuru(
    @Args('id') id : number
  ){
    return await this.guruService.delete(id)
  };

};
