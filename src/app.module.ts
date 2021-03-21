import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelajaranEntity } from './entities/pelajaran.entity';


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
        PelajaranEntity
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
