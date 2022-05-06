import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import { CreateCourseInput } from "../types";
import CourseService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

/**
 * Resolver to create a course
 */
@Resolver()
export class CreateCourseResolver {
  @Mutation(() => Course)
  @UseMiddleware(Authentication, AdminAuthentication)
  async createCourse(@Arg("req") req: CreateCourseInput): Promise<Course> {
    return await CourseService.createCourse(req);
  }
}
