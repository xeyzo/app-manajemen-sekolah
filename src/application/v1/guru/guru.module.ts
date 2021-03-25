import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuruEntity } from 'src/entities/guru.entity';
import { GuruResolver } from './guru.resolver';
import { GuruService } from './guru.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([GuruEntity])
  ],
  providers: [GuruResolver, GuruService]
})
export class GuruModule {}
