import {
  Entity,
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  JoinTable,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { UserType } from "../../constants";
import { UserCourse } from "./UserCourse";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String, { name: "firstName" })
  @Column()
  first_name: string;

  @Field(() => String, { name: "lastName" })
  @Column()
  last_name: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  phone: string;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  otp: string;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  expiry: Date;

  @Field(() => Boolean, { name: "isActive" })
  @Column({ default: false })
  is_active: boolean;

  @Field(() => UserType, { name: "userType" })
  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.CONSUMER,
  })
  user_type: UserType;

  @OneToMany(() => UserCourse, (userCourse) => userCourse.user)
  @JoinTable()
  userCourse: UserCourse[];
}
