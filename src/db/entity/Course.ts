import { Field, ID, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserCourse } from "./UserCourse";

@Entity()
@ObjectType()
export class Course extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  thumbnail: string;

  @Field(() => String, { name: "videoUrl" })
  @Column()
  video_url: string;

  @Field(() => String)
  @Column()
  description: string;

  @OneToMany(() => UserCourse, (userCourse) => userCourse.course)
  @JoinTable()
  userCourse: UserCourse[];
}
