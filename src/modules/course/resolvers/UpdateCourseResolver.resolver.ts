import { Arg, Mutation, Resolver } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import { UpdateCourseInput } from "../types";
import CourseService from "../service";

@Resolver()
export class UpdateCourseResolver {
  @Mutation(() => Course)
  async updateCourse(
    @Arg("id") id: number,
    @Arg("req") req: UpdateCourseInput
  ): Promise<Course> {
    return await CourseService.updateCourse(id, req);
  }
}
