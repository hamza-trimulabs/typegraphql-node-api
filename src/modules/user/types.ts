import { IsEmail } from "class-validator";
import { InputType, Field, ObjectType } from "type-graphql";
import { User, UserType } from "../../db/entity/User";

@InputType()
export class CreateUserInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Number)
  phone: number;

  @Field(() => UserType, { nullable: true })
  userType: UserType;
}

@InputType()
export class LoginUserInput {
  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => String)
  password: string;
}

@ObjectType()
export class Session {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  @IsEmail()
  email: string;

  @Field(() => UserType)
  userType: UserType;
}

@ObjectType()
export class JWTSession {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class LoginUserOutput {
  @Field(() => User)
  user: User;

  @Field(() => JWTSession)
  token: JWTSession;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  phone?: number;

  @Field({ nullable: true })
  userType?: UserType;
}

@InputType()
export class VerifyUserRegistrationInput {
  @Field(() => String)
  email: string;

  @Field(() => String)
  otp: string;
}
