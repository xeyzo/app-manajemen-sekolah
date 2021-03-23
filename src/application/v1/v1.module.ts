import { Module } from '@nestjs/common';
import { PelajaranModule } from './pelajaran/pelajaran.module';
import { SiswaModule } from './siswa/siswa.module';

@Module({
  imports: [PelajaranModule, SiswaModule]
})
export class V1Module {}
