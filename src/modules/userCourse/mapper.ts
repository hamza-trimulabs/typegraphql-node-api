import { UserCourse } from "../../db/entity/UserCourse";
import { ICourseMapper } from "./interface";

class CourseMapper implements ICourseMapper {
  registerUserCourse(userId: number, courseId: number): UserCourse {
    const userCourse: UserCourse | undefined = new UserCourse();
    userCourse.user_id = userId;
    userCourse.course_id = courseId;
    return userCourse;
  }
}

export default <ICourseMapper>new CourseMapper();
