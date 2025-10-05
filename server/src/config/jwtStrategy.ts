import passport_jwt, { ExtractJwt } from "passport-jwt";
import type { TokenPayload } from "../types/auth.js";
import type { DoneCallback } from "passport";
import prisma from "./prisma.js";

const JWT_Strategy = passport_jwt.Strategy;

const STRATEGY_SECRET = process.env.STRATEGY_SECRET ?? "";

const configuredStrategy = new JWT_Strategy(
  {
    secretOrKey: STRATEGY_SECRET,
    passReqToCallback: true,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (req, user_payload: TokenPayload, done: DoneCallback) => {
    const { email, expires, type }: TokenPayload = user_payload;

    if (expires - Date.now() < 0) {
      return done("Token expired!", false);
    }

    console.log(req.user);

    const user = await prisma.account.findUnique({ where: { email } });
    if (!user) {
      return done(null, false);
    } else {
      return done(null, { ...user, type });
    }
  }
);

export default configuredStrategy;
