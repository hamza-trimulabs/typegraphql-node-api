import { Field, ID, InputType } from "type-graphql";

@InputType()
export class RegisterUserCourseInput {
  @Field(() => ID)
  courseId: number;

  @Field(() => ID)
  userId: number;
}
