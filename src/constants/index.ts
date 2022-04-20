import { registerEnumType } from "type-graphql";

export const SALT_ROUND = 10;
export const EMAIL_SUBJECT = "Email verification";
export const EMAIL_BODY = `Please note the OTP: `;
export const EXPIRY_MINS_TO_ADD = 10;

export enum UserType {
  ADMIN = "ADMIN",
  CONSUMER = "CONSUMER",
}

registerEnumType(UserType, {
  name: "UserType",
});
