import { Resolver, Query, Arg } from "type-graphql";
import { User } from "../../../db/entity/User";

@Resolver()
export class GetUserResolver {
  @Query(() => User)
  async user(@Arg("id") id: number): Promise<User> {
    const user: User | null = await User.findOne({ where: { id } });
    if (user) {
      return user;
    } else {
      throw new Error("User not found");
    }
  }
}
