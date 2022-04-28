import jwt, { JwtPayload } from "jsonwebtoken";

export const verifyJWT = (token: string): JwtPayload | string => {
  const session: JwtPayload | string = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET_JWT
  );
  return session;
};
