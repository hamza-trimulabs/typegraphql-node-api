import { Resolver, Arg, Mutation } from "type-graphql";
import { UpdateUserInput } from "../types";
import { User } from "../../../db/entity/User";
import UserService from "../service";

@Resolver()
export class UpdateUserResolver {
  @Mutation(() => User)
  async updateUser(
    @Arg("id") id: number,
    @Arg("data") data: UpdateUserInput
  ): Promise<User> {
    return await UserService.update(id, data);
  }
}
