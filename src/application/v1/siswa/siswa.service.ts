import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SiswaEntity } from 'src/entities/siswa.entity';
import { Repository } from 'typeorm';
import { CreateSiswaPayload, UpdateSiswaPayload } from './siswa.type';

@Injectable()
export class SiswaService {
  constructor(
    @InjectRepository(SiswaEntity) private siswaRepo : Repository<SiswaEntity>
  ){}

  public async create(payload:CreateSiswaPayload){
      const data = await this.siswaRepo.create(payload)

      return await this.siswaRepo.save(data)
  };

  public async find(id:number){
      return await this.siswaRepo.findOne(id)
  };

  public async getAll(): Promise<SiswaEntity[]>{
      return await this.siswaRepo.find()
  };

  public async update(payload: UpdateSiswaPayload, show:any){
      return await this.siswaRepo.save({
          ...payload,
          ...show
      })      
  };

  public async delete(id:number){
      const data = await this.siswaRepo.delete(id)

      return true
  }

}
