import { Service } from "typedi";
import { Course } from "../../db/entity/Course";
import { ICourseService } from "./interface";
import { CreateCourseInput, UpdateCourseInput } from "./types";
import CourseMapper from "./mapper";

@Service()
class CourseService implements ICourseService {
  /**
   * Get all the courses
   *
   * @returns {Course[]}
   */
  async getCourses(): Promise<Course[]> {
    const courses: Course[] | undefined = await Course.find();
    if (courses.length === 0) throw new Error("No courses found");
    return courses;
  }

  /**
   * Get a course with specific id
   *
   * @param id
   * @returns {Course}
   */
  async getCourse(id: number): Promise<Course> {
    const course: Course | undefined = await Course.findOne({ where: { id } });
    if (!course) throw new Error("Course not found");
    return course;
  }

  /**
   * Crete a course with the input provided
   *
   * @param req
   * @returns {Course}
   */
  async createCourse(req: CreateCourseInput): Promise<Course> {
    let course: Course | undefined = await Course.findOne({
      where: { name: req.name },
    });
    if (course) throw new Error("Course already exist!");
    course = CourseMapper.dtoToEntity(req);
    await course.save();
    return course;
  }

  /**
   * Update a course with the input provided
   *
   * @param id
   * @param req
   * @returns {Course}
   */
  async updateCourse(id: number, req: UpdateCourseInput): Promise<Course> {
    let course: Course | undefined = await Course.findOne({ where: { id } });
    if (!course) throw new Error("Course not found!");
    course = CourseMapper.updateCourse(course, req);
    await course.save();
    return course;
  }

  /**
   * Delete a course with specific id
   *
   * @param id
   * @returns {Course}
   */
  async deleteCourse(id: number): Promise<Course> {
    const course = await Course.findOne({ where: { id } });
    if (!course) throw new Error("Course not found");
    const deletedCourse = await course.remove();
    return deletedCourse;
  }
}

export default <ICourseService>new CourseService();
