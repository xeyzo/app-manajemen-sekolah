import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";
import { MasterEntity } from "./master.entity";

@Entity({
    name:'m_kelas'
})
@ObjectType()
export class KelasEntity extends MasterEntity{
  @Column()
  @Field(type => String, { nullable: false })
  namaKelas:string;

  @Column()
  @Field(type => String, { nullable: false })
  ketuaKelas:string;

  @Column()
  @Field(type => String, { nullable: false })
  waliKelas:string;

  @Column()
  @Field(type => Int, { nullable: false })
  jumlahSiswa:number;
}