import { Module } from '@nestjs/common';
import { PelajaranModule } from './pelajaran/pelajaran.module';
import { KelasModule } from './kelas/kelas.module';
import { UserModule } from './user/user.module';


@Module({
  imports: [PelajaranModule, KelasModule, UserModule]
})
export class V1Module {}
