import 'reflect-metadata'
import { ObjectType, Field, ID, Int } from 'type-graphql'
import { User } from './User'

@ObjectType()
export class Team {
  @Field((type) => ID)
  number: number

  @Field((type) => String)
  name: string

  @Field((type) => String)
  primary: string

  @Field((type) => String)
  secondary: string

  @Field((type) => [User], { nullable: true })
  members?: [User] | null

}