import { UseGuards } from "@nestjs/common";
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PelajaranEntity } from "src/entities/pelajaran.entity";
import { AuthGuard } from "src/infrastructure/guard/auth-guard";
import { PelajaranService } from "./pelajaran.sevice";
import { PelajaranArgs, CreatePelajaranPayload, UpdatePelajaranPayload } from "./pelajaran.type";

@Resolver(of => PelajaranEntity)
export class PelajaranResolver {
  constructor(
    private readonly pelajaranService: PelajaranService
  ){}
  
  @UseGuards(new AuthGuard())
  @Query(returns => [PelajaranEntity])
  async getAllPelajaran(){
      return await this.pelajaranService.getAll()
    };

  @UseGuards(new AuthGuard())
  @Mutation(returns => PelajaranEntity)  
  async createPelajaran(
    @Args('payload') payload : CreatePelajaranPayload
  ){
    return await this.pelajaranService.create(payload)
  }

  @UseGuards(new AuthGuard())
  @Query(returns => PelajaranEntity)
  async getPelajaran(
    @Args('id') id : number
  ){
    return this.pelajaranService.find(id)
  }

  @UseGuards(new AuthGuard())
  @Query(returns => Boolean)
  async deletePelajaran(
    @Args('id') id : number
  ){
    return await this.pelajaranService.delete(id)
  }

  @UseGuards(new AuthGuard())
  @Mutation(returns => PelajaranEntity)
  async updatePelajaran(
    @Args('id') id : number,
    @Args('payload') payload : UpdatePelajaranPayload
  ){
    const find = await this.pelajaranService.find(id)

    return await this.pelajaranService.update(payload, find)
  }

}