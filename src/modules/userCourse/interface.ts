import { UserCourse } from "../../db/entity/UserCourse";
import { RegisterUserCourseInput } from "./types";

export interface ICourseService {
  registerUserCourse(req: RegisterUserCourseInput): Promise<UserCourse>;
}

export interface ICourseMapper {
  registerUserCourse(userId: number, courseId: number): UserCourse;
}
