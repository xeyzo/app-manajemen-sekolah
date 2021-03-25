import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { MasterPayload } from "src/infrastructure/type/master.type";

@InputType()
export class CreateGuruPayload extends MasterPayload{
  @Field(type => String, {nullable : false})
  nama:string;

  @Field(type => String, {nullable : false})
  mapel:string;

  @Field(type => String, {nullable : false})
  noTelepon:string;
}

@InputType()
export class UpdateGuruPayload extends MasterPayload{
  @IsOptional()
  @Field(type => String, {nullable : false})
  nama:string;

  @IsOptional()
  @Field(type => String, {nullable : false})
  mapel:string;

  @IsOptional()
  @Field(type => String, {nullable : false})
  noTelepon:string;
}