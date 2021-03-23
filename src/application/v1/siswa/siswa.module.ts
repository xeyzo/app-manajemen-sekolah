import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SiswaEntity } from 'src/entities/siswa.entity';
import { SiswaResolver } from './siswa.resolver';
import { SiswaService } from './siswa.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([SiswaEntity])
  ],
  providers: [SiswaResolver, SiswaService]
})
export class SiswaModule {}
