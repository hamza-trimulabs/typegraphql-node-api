import { UserCourse } from "../../db/entity/UserCourse";
import { UserCourseInput } from "./types";

export interface IUserCourseService {
  registerUserCourse(req: UserCourseInput): Promise<UserCourse>;
  unregisterUserCourse(req: UserCourseInput): Promise<UserCourse>;
}

export interface IUserCourseMapper {
  registerUserCourse(userId: number, courseId: number): UserCourse;
}
