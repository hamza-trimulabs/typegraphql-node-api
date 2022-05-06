import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { UserCourse } from "../../../db/entity/UserCourse";
import { UserCourseInput } from "../types";
import CourseService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

/**
 * Resolver to unregister a user-course
 */
@Resolver()
export class UnregisterUserCourse {
  @Mutation(() => UserCourse)
  @UseMiddleware(Authentication, AdminAuthentication)
  async unregisterUserCourse(
    @Arg("req") req: UserCourseInput
  ): Promise<UserCourse> {
    return await CourseService.unregisterUserCourse(req);
  }
}
