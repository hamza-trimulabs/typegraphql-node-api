import { Field, InputType } from "type-graphql";

@InputType()
export class CreateCourseInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  thumbnail: string;

  @Field(() => String)
  videoUrl: string;

  @Field(() => String)
  description: string;
}

@InputType()
export class UpdateCourseInput {
  @Field(() => String, { nullable: true })
  thumbnail?: string;

  @Field(() => String, { nullable: true })
  videoUrl?: string;

  @Field(() => String, { nullable: true })
  description?: string;
}
