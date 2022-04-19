import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field, ID, registerEnumType } from "type-graphql";

export enum UserType {
  ADMIN = "ADMIN",
  CONSUMER = "CONSUMER",
}

registerEnumType(UserType, {
  name: "UserType",
});

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => Number)
  @Column()
  phone: number;

  @Field(() => String, { nullable: true })
  @Column({ nullable: true })
  otp: string;

  @Field(() => Date, { nullable: true })
  @Column({ nullable: true })
  expiry: Date;

  @Field(() => Boolean)
  @Column({ default: false })
  isActive: boolean;

  @Field(() => UserType)
  @Column({
    type: "enum",
    enum: UserType,
    default: UserType.CONSUMER,
  })
  userType: UserType;
}
