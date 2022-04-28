import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import CourseService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

@Resolver()
export class deleteCourse {
  @Mutation(() => Course)
  @UseMiddleware(Authentication, AdminAuthentication)
  async deleteCourse(@Arg("id") id: number): Promise<Course> {
    return await CourseService.deleteCourse(id);
  }
}
