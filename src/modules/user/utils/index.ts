import bcrypt from "bcrypt";
import { SALT_ROUND, EXPIRY_MINS_TO_ADD } from "../../../constants";

/**
 * Calcualte the expiry date from the current date and time
 *
 * @returns {Date}
 */
export const getExpiryDate = (): Date => {
  const currentDate: Date = new Date();
  return new Date(currentDate.getTime() + EXPIRY_MINS_TO_ADD * 60000);
};

/**
 * Verify if the expiry date is valid currenlty or not
 *
 * @param expiryDate
 * @returns {boolean}
 */
export const verifyExipryDate = (expiryDate: Date): Boolean => {
  const currentDateTime = new Date();
  if (expiryDate < currentDateTime) return true;
  return false;
};

/**
 * Get the created hash
 *
 * @param password
 * @returns {string}
 */
export const createHash = async (password: string): Promise<string> => {
  const hash: string = await bcrypt.hash(password, SALT_ROUND);
  return hash;
};

/**
 * Verify the input password with the actual one
 *
 * @param inputPassword
 * @param actualPassword
 * @returns {boolean}
 */
export const verifyPassword = async (
  inputPassword: string,
  actualPassword: string
): Promise<boolean> => {
  const match = await bcrypt.compare(inputPassword, actualPassword);
  if (!match) return false;
  return true;
};

/**
 * Generate the OTP required for the registration verification
 *
 * @returns {string}
 */
export const generateOTP = (): string => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  return otp;
};
