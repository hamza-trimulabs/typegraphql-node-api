import { UserCourse } from "../../db/entity/UserCourse";
import { IUserCourseMapper } from "./interface";

class UserCourseMapper implements IUserCourseMapper {
  registerUserCourse(userId: number, courseId: number): UserCourse {
    const userCourse: UserCourse | undefined = new UserCourse();
    userCourse.user_id = userId;
    userCourse.course_id = courseId;
    return userCourse;
  }
}

export default <IUserCourseMapper>new UserCourseMapper();
