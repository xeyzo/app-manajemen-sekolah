import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";
import { MasterEntity } from "./master.entity";


@Entity({
    name: 'm_siswa'
})
@ObjectType()
export class SiswaEntity extends MasterEntity{
  @Column()
  @Field(type => String, {nullable : true})
  nama:string;

  @Column()
  @Field(type => Int, {nullable: true})
  umur:number;

  @Column()
  @Field(type => String, {nullable : true})
  namaWali:string;

  @Column({
      name: 'id_kelas',
      type: 'int'
  })
  @Field(type => Int ,{ nullable : false })
  idKelas:number;
}