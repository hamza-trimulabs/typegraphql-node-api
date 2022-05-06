import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * Verify the JWT token provided and returns the payload
 *
 * @param token
 * @returns {JwtPayload|string}
 */
export const verifyJWT = (token: string): JwtPayload | string => {
  const session: JwtPayload | string = jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET_JWT
  );
  return session;
};
