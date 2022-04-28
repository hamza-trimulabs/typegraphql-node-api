import { Field, ID, InputType } from "type-graphql";

@InputType()
export class UserCourseInput {
  @Field(() => ID)
  courseId: number;

  @Field(() => ID)
  userId: number;
}
