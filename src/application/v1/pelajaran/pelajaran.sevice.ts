import { InjectRepository } from "@nestjs/typeorm";
import { PelajaranEntity } from "src/entities/pelajaran.entity";
import { Repository } from "typeorm";
import { CreatePelajaranPayload, UpdatePelajaranPayload } from "./pelajaran.type";

export class PelajaranService{
    constructor(
        @InjectRepository(PelajaranEntity) private pelajaranRepo : Repository<PelajaranEntity>
    ){};
  
  public async create(payload : CreatePelajaranPayload){
   const data = await this.pelajaranRepo.create(payload)

   return await this.pelajaranRepo.save(data)
  }

  public async find(id:number){
    return await this.pelajaranRepo.findOne(id)
  }

  public async getAll(): Promise<PelajaranEntity[]>{
    return await this.pelajaranRepo.find()
  }

  public async delete(id:number){
    const data = await this.pelajaranRepo.delete(id)
    
    return true
  }

  public async update(payload: UpdatePelajaranPayload, show: any){
    return await this.pelajaranRepo.save({
      ...show,
      ...payload
    })
  }
  

}