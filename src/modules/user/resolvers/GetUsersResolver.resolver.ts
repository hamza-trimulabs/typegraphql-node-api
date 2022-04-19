import { Resolver, Query } from "type-graphql";
import { User } from "../../../db/entity/User";
import UserService from "../service";

@Resolver()
export class GetUsersResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    return await UserService.getUsers();
  }
}
