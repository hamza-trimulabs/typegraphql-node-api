import { Course } from "../../db/entity/Course";
import { ICourseMapper } from "./interface";
import { CreateCourseInput, UpdateCourseInput } from "./types";

class CourseMapper implements ICourseMapper {
  /**
   * Maps the input data to the course entity
   *
   * @param req
   * @returns {Course}
   */
  dtoToEntity(req: CreateCourseInput): Course {
    const course: Course | undefined = new Course();
    course.name = req.name;
    course.thumbnail = req.thumbnail;
    course.video_url = req.videoUrl;
    course.description = req.description;
    return course;
  }

  /**
   * Maps the input data to the course entity for update
   *
   * @param course
   * @param req
   * @returns {Course}
   */
  updateCourse(course: Course, req: UpdateCourseInput) {
    course.thumbnail = req.thumbnail ?? course.thumbnail;
    course.video_url = req.videoUrl ?? course.video_url;
    course.description = req.description ?? course.description;
    return course;
  }
}

export default <ICourseMapper>new CourseMapper();
