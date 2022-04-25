import { Query, Resolver } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import CourseService from "../service";

@Resolver()
export class GetUsersResolver {
  @Query(() => [Course])
  async getCourses(): Promise<Course[]> {
    return await CourseService.getCourses();
  }
}
