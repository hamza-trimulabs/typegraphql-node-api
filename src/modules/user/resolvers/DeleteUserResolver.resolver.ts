import { Resolver, Arg, Mutation, UseMiddleware } from "type-graphql";
import { User } from "../../../db/entity/User";
import UserService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

/**
 * Resolver to delete a user
 */
@Resolver()
export class DeleteUsersResolver {
  @Mutation(() => User)
  @UseMiddleware(Authentication, AdminAuthentication)
  async deleteUser(@Arg("id") id: number): Promise<User> {
    return await UserService.delete(id);
  }
}
