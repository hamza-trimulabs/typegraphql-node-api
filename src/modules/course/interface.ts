import { Course } from "../../db/entity/Course";
import { CreateCourseInput, UpdateCourseInput } from "./types";

export interface ICourseService {
  getCourses(): Promise<Course[]>;
  getCourse(id: number): Promise<Course>;
  createCourse(req: CreateCourseInput): Promise<Course>;
  updateCourse(id: number, req: UpdateCourseInput): Promise<Course>;
  deleteCourse(id: number): Promise<Course>;
}

export interface ICourseMapper {
  dtoToEntity(req: CreateCourseInput): Course;
  updateCourse(course: Course, req: UpdateCourseInput);
}
