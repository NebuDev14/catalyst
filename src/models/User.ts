import 'reflect-metadata'
import { ObjectType, Field, ID, Int } from 'type-graphql'
import { IsEmail } from 'class-validator'
import { Post } from './Post'
import { Team } from './Team'

@ObjectType()
export class User {
  @Field((type) => ID)
  id: number

  @Field()
  @IsEmail()
  email: string

  @Field((type) => String, { nullable: true })
  name?: string | null

  @Field((type) => Date)
  createdAt: Date

  @Field((type) => Date)
  updatedAt: Date

  @Field((type) => Team, { nullable: true })
  Team: Team

  @Field((type) => Int, { nullable: true })
  teamNumber: number


  @Field((type) => [Post], { nullable: true })
  posts?: [Post] | null
}
