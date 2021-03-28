import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { MasterArgs } from "src/infrastructure/type/master.type";
import { Column } from "typeorm";


@ObjectType()
export class SiswaArgs extends MasterArgs{
    @Column()
    @Field(type => String, {nullable : true})
    nama:string;
  
    @Column()
    @Field(type => Int, {nullable: true})
    umur:number;
  
    @Column()
    @Field(type => String, {nullable : true})
    namaWali:string;
  
    @Column()
    @Field(type => Int ,{ nullable : false })
    idKelas:number;
}

@InputType()
export class CreateSiswaPayload{
  
  @Field(type => String ,{nullable : false})
  nama: string

  @Field(type => Int, {nullable : false})
  umur: number

  @Field(type => String, {nullable : false})
  namaWali: string

  @Field(type => String, {nullable : false})
  idKelas?:number

}

@InputType()
export class UpdateSiswaPayload{
  
  @IsOptional()
  @Field(type => String ,{nullable : true})
  nama: string

  @IsOptional()
  @Field(type => Int, {nullable : true})
  umur: number

  @IsOptional()
  @Field(type => String, {nullable : true})
  namaWali: string

  @IsOptional()
  @Field(type => String, {nullable : true})
  idKelas?:number

}

