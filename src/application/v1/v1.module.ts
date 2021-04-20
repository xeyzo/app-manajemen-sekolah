import { Module } from '@nestjs/common';
import { PelajaranModule } from './pelajaran/pelajaran.module';
import { KelasModule } from './kelas/kelas.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [PelajaranModule, KelasModule, UserModule, AuthModule]
})
export class V1Module {}
