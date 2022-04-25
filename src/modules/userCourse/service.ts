import { Service } from "typedi";
import { Course } from "../../db/entity/Course";
import { ICourseService } from "./interface";
import { RegisterUserCourseInput } from "./types";
import CourseMapper from "./mapper";
import { UserCourse } from "../../db/entity/UserCourse";
import { User } from "../../db/entity/User";

@Service()
class CourseService implements ICourseService {
  async registerUserCourse(req: RegisterUserCourseInput): Promise<UserCourse> {
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
    userCourse = CourseMapper.registerUserCourse(user.id, course.id);
    await userCourse.save();
    return userCourse;
  }
}

export default <ICourseService>new CourseService();
