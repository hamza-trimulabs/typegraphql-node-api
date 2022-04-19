import { registerEnumType } from "type-graphql";

export const SALT_ROUND = 10;

export enum UserType {
  ADMIN = "ADMIN",
  CONSUMER = "CONSUMER",
}

registerEnumType(UserType, {
  name: "UserType",
});
