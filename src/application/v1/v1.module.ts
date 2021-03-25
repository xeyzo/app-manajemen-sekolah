import { Module } from '@nestjs/common';
import { PelajaranModule } from './pelajaran/pelajaran.module';
import { SiswaModule } from './siswa/siswa.module';
import { KelasModule } from './kelas/kelas.module';
import { GuruModule } from './guru/guru.module';

@Module({
  imports: [PelajaranModule, SiswaModule, KelasModule, GuruModule]
})
export class V1Module {}
