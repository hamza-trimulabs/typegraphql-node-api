import { Service } from "typedi";
import { Course } from "../../db/entity/Course";
import { ICourseService } from "./interface";
import { CreateCourseInput, UpdateCourseInput } from "./types";
import CourseMapper from "./mapper";

@Service()
class CourseService implements ICourseService {
  async getCourses(): Promise<Course[]> {
    const courses: Course[] | undefined = await Course.find();
    if (courses.length === 0) throw new Error("No courses found");
    return courses;
  }

  async getCourse(id: number): Promise<Course> {
    const course: Course | undefined = await Course.findOne({ where: { id } });
    if (!course) throw new Error("Course not found");
    return course;
  }

  async createCourse(req: CreateCourseInput): Promise<Course> {
    let course: Course | undefined = await Course.findOne({
      where: { name: req.name },
    });
    if (course) throw new Error("Course already exist!");
    course = CourseMapper.dtoToEntity(req);
    await course.save();
    return course;
  }

  async updateCourse(id: number, req: UpdateCourseInput): Promise<Course> {
    let course: Course | undefined = await Course.findOne({ where: { id } });
    if (!course) throw new Error("Course not found!");
    course = CourseMapper.updateCourse(course, req);
    await course.save();
    return course;
  }

  async deleteCourse(id: number): Promise<Course> {
    const course = await Course.findOne({ where: { id } });
    if (!course) throw new Error("Course not found");
    const deletedCourse = await course.remove();
    return deletedCourse;
  }
}

export default <ICourseService>new CourseService();
