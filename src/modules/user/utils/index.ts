import bcrypt from "bcrypt";
import { SALT_ROUND, EXPIRY_MINS_TO_ADD } from "../../../constants";

export const getExpiryDate = (): Date => {
  const currentDate: Date = new Date();
  return new Date(currentDate.getTime() + EXPIRY_MINS_TO_ADD * 60000);
};

export const verifyExipryDate = (expiryDate: Date): Boolean => {
  const currentDateTime = new Date();
  if (expiryDate < currentDateTime) return true;
  return false;
};

export const createHash = async (password: string): Promise<string> => {
  const hash: string = await bcrypt.hash(password, SALT_ROUND);
  return hash;
};

export const verifyPassword = async (
  inputPassword: string,
  actualPassword: string
): Promise<boolean> => {
  const match = await bcrypt.compare(inputPassword, actualPassword);
  if (!match) return false;
  return true;
};

export const generateOTP = (): string => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
};
