import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KelasEntity } from 'src/entities/kelas.entity';
import { Repository } from 'typeorm';
import { KelasPayload, UpdateKelasPayload } from './kelas.type';

@Injectable()
export class KelasService {
  constructor(
      @InjectRepository(KelasEntity) private kelasRepo : Repository <KelasEntity>
  ){};

  public async create(payload : KelasPayload){
    const data = await this.kelasRepo.create(payload)

    return await this.kelasRepo.save(data)
  };

  public async find(id : number){
      return await this.kelasRepo.findOne(id)
  };

  public async getAll(): Promise<KelasEntity[]>{
      return await this.kelasRepo.find()
  }

  public async update(payload: UpdateKelasPayload, show: any){
    return await this.kelasRepo.save({
      ...show,
      ...payload
    })
  }

  public async delete(id : number){
      return await this.kelasRepo.delete(id)
  }
}
