import { UserCourse } from "../../db/entity/UserCourse";
import { IUserCourseMapper } from "./interface";
import { UserCourseInput } from "./types";

class UserCourseMapper implements IUserCourseMapper {
  registerUserCourse(req: UserCourseInput): UserCourse {
    const userCourse: UserCourse | undefined = new UserCourse();
    userCourse.user_id = req.userId;
    userCourse.course_id = req.courseId;
    return userCourse;
  }
}

export default <IUserCourseMapper>new UserCourseMapper();
