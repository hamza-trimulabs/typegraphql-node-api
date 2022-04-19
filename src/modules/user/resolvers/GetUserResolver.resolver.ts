import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../../../db/entity/User";
import UserService from "../service";

@Resolver()
export class GetUserResolver {
  @Query(() => User)
  async user(@Arg("id") id: number): Promise<User> {
    return await UserService.getUser(id);
  }
}
