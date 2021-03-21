import { Module } from '@nestjs/common';
import { PelajaranModule } from './pelajaran/pelajaran.module';

@Module({
  imports: [PelajaranModule]
})
export class V1Module {}
