import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  idx: number

  @Field()
  id: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  createdAt: Date
}