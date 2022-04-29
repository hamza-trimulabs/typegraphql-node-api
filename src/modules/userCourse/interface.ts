import { UserCourse } from "../../db/entity/UserCourse";
import { UserCourseInput } from "./types";

export interface IUserCourseService {
  getUserCourse(req: UserCourseInput): Promise<UserCourse>;
  getUserCourses(userId: number): Promise<UserCourse[]>;
  registerUserCourse(req: UserCourseInput): Promise<UserCourse>;
  unregisterUserCourse(req: UserCourseInput): Promise<UserCourse>;
}

export interface IUserCourseMapper {
  registerUserCourse(req: UserCourseInput): UserCourse;
}
