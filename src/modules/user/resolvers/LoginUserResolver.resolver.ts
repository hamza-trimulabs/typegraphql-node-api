import { Resolver, Arg, Mutation } from "type-graphql";
import { LoginUserInput, LoginUserOutput } from "../types";
import UserService from "../service";

@Resolver()
export class LoginUserResolver {
  @Mutation(() => LoginUserOutput)
  async loginUser(@Arg("data") data: LoginUserInput): Promise<LoginUserOutput> {
    return await UserService.login(data);
  }
}
