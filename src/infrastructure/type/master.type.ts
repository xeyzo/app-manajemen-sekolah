import { Field, ID, InputType, ObjectType } from "@nestjs/graphql"
import { Column, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@ObjectType()
export class MasterArgs{
  
  @PrimaryGeneratedColumn()  
  @Field(type => ID , { nullable : false })
  id:number

  @Column()
  @Field(type => String, { nullable : true})
  createdAt: string

  @Column()
  @Field(type => String, { nullable : true})
  updatedAt: string
    
};
