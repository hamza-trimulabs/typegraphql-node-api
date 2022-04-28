import { Arg, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { UserCourseInput } from "../types";
import { UserCourse } from "../../../db/entity/UserCourse";
import CourseService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

@Resolver()
export class RegisterUserCourseResolver {
  @Mutation(() => UserCourse)
  @UseMiddleware(Authentication, AdminAuthentication)
  async registerUserCourse(
    @Arg("req") req: UserCourseInput
  ): Promise<UserCourse> {
    return await CourseService.registerUserCourse(req);
  }
}
