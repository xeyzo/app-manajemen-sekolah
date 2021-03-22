import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { PelajaranEntity } from "src/entities/pelajaran.entity";
import { PelajaranService } from "./pelajaran.sevice";
import { PelajaranArgs, PelajaranPayload } from "./pelajaran.type";

@Resolver(of => PelajaranEntity)
export class PelajaranResolver {
  constructor(
    private readonly pelajaranService: PelajaranService
  ){}

  @Query(returns => PelajaranEntity)
  async getAllPelajaran(){
        return{
            id: 1,
            name: 'udin',
            createdAt: 'rabu',
            updateAt: 'rabu'
        }
    };

  @Mutation(returns => PelajaranEntity)  
  async createPelajaran(
    @Args('payload') payload : PelajaranPayload
  ){
    return await this.pelajaranService.create(payload)
  }

  @Query(returns => PelajaranEntity)
  async getPelajaran(
    @Args('id') id : number
  ){
    return this.pelajaranService.find(id)
  }

}