import { Field, ObjectType, ID } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Course } from "./Course";
import { User } from "./User";

@Entity()
@ObjectType()
export class UserCourse extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID, { name: "courseId" })
  @Column()
  course_id: number;

  @Field(() => ID, { name: "userId" })
  @Column()
  user_id: number;

  @ManyToOne(() => Course, (course) => course.userCourse, {
    onDelete: "CASCADE",
  })
  @JoinTable()
  @JoinColumn({ name: "course_id" })
  course: Course;

  @ManyToOne(() => User, (user) => user.userCourse, { onDelete: "CASCADE" })
  @JoinTable()
  @JoinColumn({ name: "user_id" })
  user: User;
}
