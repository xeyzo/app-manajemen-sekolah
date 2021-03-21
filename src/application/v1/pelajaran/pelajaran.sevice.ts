import { InjectRepository } from "@nestjs/typeorm";
import { PelajaranEntity } from "src/entities/pelajaran.entity";
import { Repository } from "typeorm";
import { PelajaranPayload } from "./pelajaran.type";

export class PelajaranService{
    constructor(
        @InjectRepository(PelajaranEntity) private pelajaranRepo : Repository<PelajaranEntity>
    ){};
  
  public async create(payload : PelajaranPayload){
   const data = await this.pelajaranRepo.create(payload)

   return await this.pelajaranRepo.save(data)
  }

}