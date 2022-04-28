import { Resolver, Arg, Mutation, UseMiddleware } from "type-graphql";
import { UpdateUserInput } from "../types";
import { User } from "../../../db/entity/User";
import UserService from "../service";
import { Authentication } from "../../middleware/Authentication";

@Resolver()
export class UpdateUserResolver {
  @Mutation(() => User)
  @UseMiddleware(Authentication)
  async updateUser(@Arg("data") data: UpdateUserInput): Promise<User> {
    return await UserService.update(data);
  }
}
