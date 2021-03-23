import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { SiswaEntity } from 'src/entities/siswa.entity';
import { SiswaService } from './siswa.service';
import { CreateSiswaPayload, UpdateSiswaPayload } from './siswa.type';

@Resolver()
export class SiswaResolver {
  constructor(
      private readonly siswaService: SiswaService
  ){};

  @Mutation(returns => SiswaEntity)
  async createSiswa(
    @Args('payload') payload : CreateSiswaPayload
  ){
    return await this.siswaService.create(payload) 
  };

  @Query(returns => [SiswaEntity])
  async getAllSiswa(){
      return await this.siswaService.getAll()
  };

  @Query(returns => SiswaEntity)
  async getSiswa(
      @Args('id') id : number
  ){
      return await this.siswaService.find(id)
  };

  @Mutation(returns => SiswaEntity)
  async updateSiswa(
      @Args('id') id : number,
      @Args('payload') payload : UpdateSiswaPayload
  ){
      const find = await this.siswaService.find(id)

      return await this.siswaService.update(payload, find)
  };

  @Query(returns => Boolean)
  async deleteSiswa(
      @Args('id') id : number
  ){
      return await this.siswaService.delete(id)
  };

}
