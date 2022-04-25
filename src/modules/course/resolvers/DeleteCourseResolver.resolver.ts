import { Arg, Mutation, Resolver } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import CourseService from "../service";

@Resolver()
export class deleteCourse {
  @Mutation(() => Course)
  async deleteCourse(@Arg("id") id: number): Promise<Course> {
    return await CourseService.deleteCourse(id);
  }
}
