import { Resolver, Query, Arg } from "type-graphql";
import { VerifyUserRegistrationInput } from "../types";
import UserService from "../service";

@Resolver()
export class VerifyUserRegistration {
  @Query(() => Boolean)
  async verifyUserRegistration(@Arg("data") data: VerifyUserRegistrationInput) {
    return await UserService.verifyUserregistration(data);
  }
}
