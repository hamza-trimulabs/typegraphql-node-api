import { Resolver, Arg, Mutation } from "type-graphql";
import { VerifyUserRegistrationInput } from "../types";
import UserService from "../service";

/**
 * Resolver to verify the user registration based on the otp and email
 */
@Resolver()
export class VerifyUserRegistration {
  @Mutation(() => Boolean)
  async verifyUserRegistration(@Arg("data") data: VerifyUserRegistrationInput) {
    return await UserService.verifyUserRegistration(data);
  }
}
