import { User } from "../../db/entity/user";
import {
  LoginUserInput,
  CreateUserInput,
  LoginUserOutput,
  UpdateUserInput,
  VerifyUserRegistrationInput,
} from "./types";

export interface IUserService {
  getUsers(): Promise<User[]>;
  getUser(id: number): Promise<User>;
  register(data: CreateUserInput): Promise<LoginUserOutput>;
  login(data: LoginUserInput): Promise<LoginUserOutput>;
  update(id: number, data: UpdateUserInput): Promise<User>;
  delete(id: number): Promise<User>;
  verifyUserregistration(data: VerifyUserRegistrationInput): Promise<boolean>;
}
