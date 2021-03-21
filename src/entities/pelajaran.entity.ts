import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";
import { MasterEntity } from "./master.entity";

@Entity({
    name: 'm_pelajaran'
})
@ObjectType()
export class PelajaranEntity extends MasterEntity{

  @Column()
  @Field(type => String, { nullable: false })
  name: string;

}