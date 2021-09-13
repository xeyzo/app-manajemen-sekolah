import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { KelasEntity } from 'src/entities/kelas.entity';
import { AuthGuard } from 'src/infrastructure/guard/auth-guard';
import { KelasService } from './kelas.service';
import { KelasPayload, UpdateKelasPayload } from './kelas.type';

@Resolver(of => KelasEntity)
export class KelasResolver {
  constructor(
      private readonly kelasService : KelasService
  ){};
  
  @UseGuards(new AuthGuard())
  @Mutation(returns => KelasEntity)
  async createKelas(
    @Args('payload') payload : KelasPayload     
  ){
    return await this.kelasService.create(payload)
  };

  @UseGuards(new AuthGuard())
  @Query(returns => KelasEntity)
  async getKelas(
    @Args('id') id : number
  ){
    return await this.kelasService.find(id)
  };

  @UseGuards(new AuthGuard())
  @Query(returns => [KelasEntity])
  async getAllKelas(){
    return await this.kelasService.getAll()
  };

  @UseGuards(new AuthGuard())
  @Mutation(returns => KelasEntity)
  async updateKelas(
    @Args('id') id : number,
    @Args('payload') payload : UpdateKelasPayload
  ){
    const find = await this.kelasService.find(id)

    return await this.kelasService.update(payload, find)
  }

  @UseGuards(new AuthGuard())
  @Mutation(returns => Boolean)
  async deleteKelas(
    @Args('id') id : number
  ){
    return await this.kelasService.delete(id)
  };
    
}
