import { Resolver, Arg, Mutation } from "type-graphql";
import { User } from "../../../db/entity/User";
import UserService from "../service";

@Resolver()
export class DeleteUsersResolver {
  @Mutation(() => User)
  async deleteUser(@Arg("id") id: number): Promise<User> {
    return await UserService.delete(id);
  }
}
