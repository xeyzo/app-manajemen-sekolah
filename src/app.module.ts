import { Module } from '@nestjs/common';
import { ApplicationModule } from './application/application.module';
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm';
import { PelajaranEntity } from './entities/pelajaran.entity';
import { KelasEntity } from './entities/kelas.entity';
import { UserEntity } from './entities/user.entity';
import { join } from 'path';



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
        PelajaranEntity, KelasEntity, UserEntity
      ],
      synchronize: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/resources/schema.gql'),
      context: ({ req }) => ({ headers: req.headers}),     
    }),
    ApplicationModule
  ]
})
export class AppModule {}
