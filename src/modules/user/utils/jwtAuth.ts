import jwt from "jsonwebtoken";
import { JWTSession, Session } from "../types";

export const jwtAuth = (session: Session): JWTSession => {
  const accessSecret = process.env.ACCESS_TOKEN_SECRET_JWT;
  if (!accessSecret) throw new Error("invalid access secret key");

  const refreshSecret = process.env.REFRESH_TOKEN_SECRET_JWT;
  if (!refreshSecret) throw new Error("invalid refresh secret key");

  const accessToken = jwt.sign({ session }, accessSecret, { expiresIn: "1d" });

  const refreshToken = jwt.sign({ session }, refreshSecret, {
    expiresIn: "7d",
  });
  return { accessToken, refreshToken };
};
