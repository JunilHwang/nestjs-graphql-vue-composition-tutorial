import {Field, ID, ObjectType} from "@nestjs/graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id?: string

  @Field()
  userId: string

  @Field()
  email: string

  @Field()
  name: string

  @Field()
  createdAt: Date
}