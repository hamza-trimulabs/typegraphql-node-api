import { User } from "../../db/entity/User";
import { IAuthMapper } from "./interface";
import { CreateUserInput, UpdateUserInput } from "./types";
import { getExpiryDate, createHash, generateOTP } from "../user/utils/index";

class AuthMapper implements IAuthMapper {
  /**
   * Maps the input data to the user entity
   *
   * @param req
   * @returns {User}
   */
  async dtoToEntity(req: CreateUserInput): Promise<User> {
    const user: User = new User();
    user.first_name = req.firstName;
    user.last_name = req.lastName;
    user.email = req.email;
    user.password = await createHash(req.password);
    user.phone = req.phone;
    user.user_type = req.userType;
    user.otp = generateOTP();
    user.expiry = getExpiryDate();
    return user;
  }

  /**
   * Maps the input data to the user entity for update
   *
   * @param user
   * @param req
   * @returns {User}
   */
  updateUserData(user: User, req: UpdateUserInput): User {
    user.first_name = req.firstName ?? user.first_name;
    user.last_name = req.lastName ?? user.last_name;
    user.phone = req.phone ?? user.phone;
    return user;
  }

  /**
   * Updates the otp, expiry date and is active status for the user
   *
   * @param user
   * @returns {User}
   */
  updateUserOTP(user: User): User {
    user.otp = "";
    user.expiry = new Date();
    user.is_active = true;
    return user;
  }
}

export default <IAuthMapper>new AuthMapper();
