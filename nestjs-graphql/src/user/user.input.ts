import {Field, InputType} from "@nestjs/graphql";
import {IsOptional, Length, Max, MaxLength} from "class-validator";

@InputType()
export class UserInput {

  @Field()
  @MaxLength(20)
  id: string

  @Field()
  @IsOptional()
  @MaxLength(255)
  email?: string

  @Field()
  name: string

}