import { registerEnumType } from "type-graphql";

export const SALT_ROUND = 10;
export const EMAIL_SUBJECT = "Email verification";
export const EMAIL_BODY = `Please note the OTP: `;

export enum UserType {
  ADMIN = "ADMIN",
  CONSUMER = "CONSUMER",
}

registerEnumType(UserType, {
  name: "UserType",
});
