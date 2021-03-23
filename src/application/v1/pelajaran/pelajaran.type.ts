import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";
import { MasterArgs, MasterPayload } from "src/infrastructure/type/master.type";
import { Column } from "typeorm";

@ObjectType()
export class PelajaranArgs extends MasterArgs{

  @Column()
  @Field(type => String, { nullable: false })
  name: string;

};

@InputType()
export class CreatePelajaranPayload extends MasterPayload{
  
  @Field(type => String, { nullable: false })
  name: string;

}

@InputType()
export class UpdatePelajaranPayload extends MasterPayload{
  
  @IsOptional()
  @Field(type => String, { nullable: true })
  name: string;

}