import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuruEntity } from 'src/entities/guru.entity';
import { Repository } from 'typeorm';
import { CreateGuruPayload, UpdateGuruPayload } from './guru.type';

@Injectable()
export class GuruService {
  constructor(
    @InjectRepository(GuruEntity) private guruRepo : Repository<GuruEntity>
  ){};

  public async create(payload : CreateGuruPayload){
    const data = await this.guruRepo.create(payload)

    return await this.guruRepo.save(data)
  };

  public async find(id : number){
    return await this.guruRepo.findOne(id)
  };

  public async getAll(): Promise<GuruEntity[]>{
    return await this.guruRepo.find()
  };

  public async update(payload : UpdateGuruPayload, show : any){
    return await this.guruRepo.save({
        ...payload,
        ...show
    })
  };

  public async delete(id:number){
      return await this.guruRepo.delete(id)
  };
}
