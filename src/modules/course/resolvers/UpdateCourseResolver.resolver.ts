import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import { UpdateCourseInput } from "../types";
import CourseService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

@Resolver()
export class UpdateCourseResolver {
  @Mutation(() => Course)
  @UseMiddleware(Authentication, AdminAuthentication)
  async updateCourse(
    @Arg("id") id: number,
    @Arg("req") req: UpdateCourseInput
  ): Promise<Course> {
    return await CourseService.updateCourse(id, req);
  }
}
