import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";
import { MasterEntity } from "./master.entity";

@Entity({
  name :'m_guru'
})
@ObjectType()
export class GuruEntity extends MasterEntity{
  @Column()
  @Field(type => String, {nullable : true})
  nama:string;

  @Column()
  @Field(type => String, {nullable : true})
  mapel:string;

  @Column({
      name:'no_telepon'
  })
  @Field(type => String, {nullable : true})
  noTelepon:string;

}