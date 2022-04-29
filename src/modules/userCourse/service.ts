import { Service } from "typedi";
import { IUserCourseService } from "./interface";
import { UserCourseInput } from "./types";
import UserCourseMapper from "./mapper";
import { UserCourse } from "../../db/entity/UserCourse";
import UserService from "../user/service";
import CourseService from "../course/service";

@Service()
class UserCourseService implements IUserCourseService {
  async getUserCourse(req: UserCourseInput): Promise<UserCourse> {
    let userCourse: UserCourse | undefined = await UserCourse.findOne({
      where: { user_id: req.userId, course_id: req.courseId },
    });
    if (!userCourse) throw new Error("User not registered for the course!");
    return userCourse;
  }

  async getUserCourses(userId: number): Promise<UserCourse[]> {
    const userCourses: UserCourse[] | undefined = await UserCourse.find({
      where: { user_id: userId },
    });
    if (userCourses.length === 0)
      throw new Error("No courses found for the user!");
    return userCourses;
  }

  async registerUserCourse(req: UserCourseInput): Promise<UserCourse> {
    await UserService.getUser(req.userId);
    await CourseService.getCourse(req.courseId);
    let userCourse: UserCourse | undefined = await UserCourse.findOne({
      where: { user_id: req.userId, course_id: req.courseId },
    });
    if (userCourse) throw new Error("User already registered for the course!");
    userCourse = UserCourseMapper.registerUserCourse(req);
    await userCourse.save();
    return userCourse;
  }

  async unregisterUserCourse(req: UserCourseInput): Promise<UserCourse> {
    await UserService.getUser(req.userId);
    await CourseService.getCourse(req.courseId);
    let userCourse: UserCourse | undefined = await UserCourse.findOne({
      where: { user_id: req.userId, course_id: req.courseId },
    });
    if (!userCourse) throw new Error("User not registered for the course!");
    const deletedUserCourse: UserCourse | undefined = await userCourse.remove();
    return deletedUserCourse;
  }
}

export default <IUserCourseService>new UserCourseService();
