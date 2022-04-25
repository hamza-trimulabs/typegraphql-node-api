import { Arg, Mutation, Resolver } from "type-graphql";
import { Course } from "../../../db/entity/Course";
import { CreateCourseInput } from "../types";
import CourseService from "../service";

@Resolver()
export class CreateCourseResolver {
  @Mutation(() => Course)
  async createCourse(@Arg("req") req: CreateCourseInput): Promise<Course> {
    return await CourseService.createCourse(req);
  }
}
