import { Service } from "typedi";
import { User } from "../../db/entity/User";
import { IUserService } from "./interface";
import {
  CreateUserInput,
  LoginUserInput,
  LoginUserOutput,
  UpdateUserInput,
  VerifyUserRegistrationInput,
} from "./types";
import { jwtAuth } from "./utils/jwtAuth";
import { verificationAuth } from "./utils/verificationAuth";
import bcrypt from "bcrypt";

@Service()
class UserService implements IUserService {
  async getUsers(): Promise<User[]> {
    return User.find();
  }

  async getUser(id: number): Promise<User> {
    const user: User | null = await User.findOne({ where: { id } });
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  }

  async register(data: CreateUserInput): Promise<LoginUserOutput> {
    const saltRounds = 10;
    let user: User | null = await User.findOne({
      where: { email: data.email },
    });
    if (user) throw new Error("User already registered");
    user = new User();
    const hash: string = await bcrypt.hash(data.password, saltRounds);
    data.password = hash;
    Object.assign(user, data);
    const token = jwtAuth({
      id: user.id,
      email: user.email,
      userType: user.userType,
    });
    const otp = await verificationAuth();
    const minutesToAdd = 10;
    const currentDate = new Date();
    user.otp = otp;
    user.expiry = new Date(currentDate.getTime() + minutesToAdd * 60000);
    await user.save();
    return { user, token };
  }

  async login(data: LoginUserInput): Promise<LoginUserOutput> {
    const user: User | null = await User.findOne({
      where: { email: data.email },
    });
    if (!user) throw new Error("Invalid Email!");
    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new Error("Invalid password!");
    const token = jwtAuth({
      id: user.id,
      email: user.email,
      userType: user.userType,
    });

    return { user, token };
  }

  async update(id: number, data: UpdateUserInput): Promise<User> {
    const user: User | null = await User.findOne({ where: { id } });
    if (!user) throw new Error("User not found!");
    Object.assign(user, data);
    await user.save();
    return user;
  }

  async delete(id: number): Promise<User> {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new Error("User not found!");
    const deletedUser = await user.remove();
    return deletedUser;
  }

  async verifyUserregistration(
    data: VerifyUserRegistrationInput
  ): Promise<boolean> {
    const user: User | null = await User.findOne({
      where: { email: data.email },
    });
    if (!user) throw new Error("User not found");
    const currentDateTime = new Date();

    if (
      !user.otp ||
      user.otp !== data.otp ||
      !user.expiry ||
      user.expiry < currentDateTime
    ) {
      return false;
    }
    user.otp = "";
    user.expiry = currentDateTime;
    user.isActive = true;
    await user.save();
    return true;
  }
}

export default <IUserService>new UserService();
