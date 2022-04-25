import { Arg, Mutation, Resolver } from "type-graphql";
import { RegisterUserCourseInput } from "../types";
import { UserCourse } from "../../../db/entity/UserCourse";
import CourseService from "../service";

@Resolver()
export class RegisterUserCourseResolver {
  @Mutation(() => UserCourse)
  async registerUserCourse(
    @Arg("req") req: RegisterUserCourseInput
  ): Promise<UserCourse> {
    return await CourseService.registerUserCourse(req);
  }
}
