import { User } from "../../db/entity/User";
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
  update(data: UpdateUserInput): Promise<User>;
  delete(id: number): Promise<User>;
  verifyUserRegistration(data: VerifyUserRegistrationInput): Promise<boolean>;
}

export interface IAuthMapper {
  dtoToEntity(req: CreateUserInput): Promise<User>;
  updateUserData(user: User, req: UpdateUserInput): User;
  updateUserOTP(user: User): User;
}
