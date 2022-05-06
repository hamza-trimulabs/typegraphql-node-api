import { Resolver, Arg, Mutation, UseMiddleware, Ctx } from "type-graphql";
import { Context } from "apollo-server-core";
import { UpdateUserInput } from "../types";
import { User } from "../../../db/entity/User";
import UserService from "../service";
import { Authentication } from "../../middleware/Authentication";

/**
 * Resolver to update a user
 */
@Resolver()
export class UpdateUserResolver {
  @Mutation(() => User)
  @UseMiddleware(Authentication)
  async updateUser(
    @Arg("data") data: UpdateUserInput,
    @Ctx() ctx: Context
  ): Promise<User> {
    return await UserService.update(ctx["user"].id, data);
  }
}
