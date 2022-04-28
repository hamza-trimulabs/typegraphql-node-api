import { Context } from "apollo-server-core";
import { MiddlewareInterface, ResolverData, NextFn } from "type-graphql";
import { Service } from "typedi";
import { UserType } from "../../constants";
import { User } from "../../db/entity/User";

@Service()
export class AdminAuthentication implements MiddlewareInterface<Context> {
  async use({ context }: ResolverData<Context>, next: NextFn) {
    const user: User | undefined = context["user"];
    if (user.user_type !== UserType.ADMIN)
      throw new Error("User not Authorized!");
    return next();
  }
}
