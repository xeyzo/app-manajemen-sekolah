import { Field, InputType, Int } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class KelasPayload{
  @Field(type => String, { nullable: false })
  namaKelas:string;

  @Field(type => String, { nullable: false })
  ketuaKelas:string;

  @Field(type => String, { nullable: false })
  waliKelas:string;

  @Field(type => Int, { nullable: false })
  jumlahSiswa:number;
}

@InputType()
export class UpdateKelasPayload{
  
  @IsOptional()
  @Field(type => String, { nullable: true })
  namaKelas:string;

  @IsOptional()
  @Field(type => String, { nullable: true })
  ketuaKelas:string;

  @IsOptional()
  @Field(type => String, { nullable: true })
  waliKelas:string;

  @IsOptional()
  @Field(type => Int, { nullable: true })
  jumlahSiswa:number;
}