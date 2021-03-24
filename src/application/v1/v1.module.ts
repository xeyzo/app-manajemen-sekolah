import { Module } from '@nestjs/common';
import { PelajaranModule } from './pelajaran/pelajaran.module';
import { SiswaModule } from './siswa/siswa.module';
import { KelasModule } from './kelas/kelas.module';

@Module({
  imports: [PelajaranModule, SiswaModule, KelasModule]
})
export class V1Module {}
