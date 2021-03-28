import { Field, InputType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@InputType()
export class CreateGuruPayload{
  @Field(type => String, {nullable : false})
  nama:string;

  @Field(type => String, {nullable : false})
  mapel:string;

  @Field(type => String, {nullable : false})
  noTelepon:string;
}

@InputType()
export class UpdateGuruPayload{
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