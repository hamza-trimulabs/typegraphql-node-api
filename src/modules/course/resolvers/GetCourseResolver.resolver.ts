import { Arg, Query, Resolver } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import CourseService from "../service";

@Resolver()
export class getCourse {
  @Query(() => Course)
  async getCourse(@Arg("id") id: number): Promise<Course> {
    return await CourseService.getCourse(id);
  }
}
