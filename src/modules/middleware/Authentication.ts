import { Context } from "apollo-server-core";
import { JwtPayload } from "jsonwebtoken";
import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import UserService from "../user/service";
import { verifyJWT } from "../../utils";
import { Service } from "typedi";

@Service()
export class Authentication implements MiddlewareInterface<Context> {
  async use({ context }: ResolverData<Context>, next: NextFn) {
    const token: string = context["headers"].authorization;
    if (!token) throw new Error("Please Provide Auth Token!");

    const session: JwtPayload | string = verifyJWT(token);
    if (!session) throw new Error("Access denied.");
    const user = await UserService.getUser(session["session"].id);
    context["user"] = user;
    return next();
  }
}
