import { Field, ID, ObjectType } from "@nestjs/graphql"
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm"

@ObjectType()
@Entity()
export class MasterEntity{
  
  @PrimaryGeneratedColumn()  
  @Field(type => ID , { nullable : false })
  id:number

  @CreateDateColumn({
    type:'timestamp',
    name:'created_at'
  })
  @Field(type => String, { nullable : true})
  createdAt: string

  @UpdateDateColumn({
    type:'timestamp',
    name:'updated_at'
  })
  @Field(type => String, { nullable : true})
  updatedAt: string
    
}