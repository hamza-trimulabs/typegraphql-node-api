import { Resolver, Arg, Mutation } from "type-graphql";
import { CreateUserInput, LoginUserOutput } from "../types";
import UserService from "../service";

/**
 * Resolver to register a user
 */
@Resolver()
export class RegisterUsersResolver {
  @Mutation(() => LoginUserOutput)
  async registerUser(
    @Arg("data") data: CreateUserInput
  ): Promise<LoginUserOutput> {
    return await UserService.register(data);
  }
}
