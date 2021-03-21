import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from "typeorm"

@ObjectType()
@Entity()
export class MasterEntity{
  
  @PrimaryGeneratedColumn()  
  @Field(type => ID , { nullable : false })
  id:number

  @Column()
  @Field(type => String, { nullable : true})
  createdAt: string

  @Column()
  @Field(type => String, { nullable : true})
  updatedAt: string
    
}