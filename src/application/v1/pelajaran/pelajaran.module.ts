import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelajaranEntity } from 'src/entities/pelajaran.entity';
import { PelajaranResolver } from './pelajaran.resolver';
import { PelajaranService } from './pelajaran.sevice';

@Module({
    imports:[
        TypeOrmModule.forFeature([PelajaranEntity])
    ],
    providers: [
        PelajaranResolver,PelajaranService
    ]
})
export class PelajaranModule {}
