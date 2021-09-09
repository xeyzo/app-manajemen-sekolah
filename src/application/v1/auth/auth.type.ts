import { Field, InputType } from "@nestjs/graphql"
import { IsEmail } from "class-validator"

@InputType()
export class LoginPayload {

  @Field(type => String, { nullable : false })
  userName:string
  
  @Field(type => String, { nullable : false })
  password:string

  @IsEmail()
  @Field(type => String, { nullable : true })
  email:string
    
}