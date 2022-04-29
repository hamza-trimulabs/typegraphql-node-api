import { Resolver, Query, UseMiddleware } from "type-graphql";
import { User } from "../../../db/entity/User";
import UserService from "../service";
import { Authentication } from "../../middleware/Authentication";
import { AdminAuthentication } from "../../middleware/AdminAuthentication";

@Resolver()
export class GetUsersResolver {
  @Query(() => [User])
  @UseMiddleware(Authentication, AdminAuthentication)
  async users(): Promise<User[]> {
    return await UserService.getUsers();
  }
}
