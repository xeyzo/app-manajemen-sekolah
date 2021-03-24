import { Module } from '@nestjs/common';
import { KelasService } from './kelas.service';
import { KelasResolver } from './kelas.resolver';
import { KelasEntity } from 'src/entities/kelas.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([KelasEntity])
  ],
  providers: [KelasService, KelasResolver]
})
export class KelasModule {}
