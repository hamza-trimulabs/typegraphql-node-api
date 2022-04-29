import { Arg, Query, Resolver } from "type-graphql";
import { UserCourse } from "../../../db/entity/UserCourse";
import UserCourseService from "../service";

@Resolver()
export class GetUserCourses {
  @Query(() => [UserCourse])
  async getUserCourses(@Arg("userId") userId: number): Promise<UserCourse[]> {
    return await UserCourseService.getUserCourses(userId);
  }
}
