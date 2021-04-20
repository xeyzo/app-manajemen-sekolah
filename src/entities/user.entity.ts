import { Field, ObjectType } from "@nestjs/graphql";
import { Column, Entity } from "typeorm";
import { MasterEntity } from "./master.entity";

@Entity({
    name: 'm_user'
})
@ObjectType()
export class UserEntity extends MasterEntity{
    
  @Column()
  @Field(type => String, { nullable : false })
  userName:string;

  @Column()
  @Field(type => String, { nullable : false })
  password:string;

  @Column()
  @Field(type => String, { nullable : true })
  email:string; 
  
}