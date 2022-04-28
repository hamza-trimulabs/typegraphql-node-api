import { Service } from "typedi";
import { Course } from "../../db/entity/Course";
import { IUserCourseService } from "./interface";
import { UserCourseInput } from "./types";
import UserCourseMapper from "./mapper";
import { UserCourse } from "../../db/entity/UserCourse";
import { User } from "../../db/entity/User";

@Service()
class UserCourseService implements IUserCourseService {
  async registerUserCourse(req: UserCourseInput): Promise<UserCourse> {
    const user: User | undefined = await User.findOne({
      where: { id: req.userId },
    });
    if (!user) throw new Error("User not found!");
    const course: Course | undefined = await Course.findOne({
      where: { id: req.courseId },
    });
    if (!course) throw new Error("Course not found!");
    let userCourse: UserCourse | undefined = await UserCourse.findOne({
      where: { user_id: req.userId, course_id: req.courseId },
    });
    if (userCourse) throw new Error("User already registered for the course!");
    userCourse = UserCourseMapper.registerUserCourse(user.id, course.id);
    await userCourse.save();
    return userCourse;
  }

  async unregisterUserCourse(req: UserCourseInput): Promise<UserCourse> {
    const user: User | undefined = await User.findOne({
      where: { id: req.userId },
    });
    if (!user) throw new Error("User not found!");
    const course: Course | undefined = await Course.findOne({
      where: { id: req.courseId },
    });
    if (!course) throw new Error("Course not found!");
    let userCourse: UserCourse | undefined = await UserCourse.findOne({
      where: { user_id: req.userId, course_id: req.courseId },
    });
    if (!userCourse) throw new Error("User not registered for the course!");
    const deletedUserCourse: UserCourse | undefined = await userCourse.remove();
    return deletedUserCourse;
  }
}

export default <IUserCourseService>new UserCourseService();
