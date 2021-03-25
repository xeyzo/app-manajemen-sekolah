import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelajaranEntity } from './entities/pelajaran.entity';
import { SiswaEntity } from './entities/siswa.entity';
import { KelasEntity } from './entities/kelas.entity';
import { GuruEntity } from './entities/guru.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'latihan',
      entities: [
        PelajaranEntity, SiswaEntity, KelasEntity, GuruEntity
      ],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile : true
    }),
    ApplicationModule
  ]
})
export class AppModule {}
