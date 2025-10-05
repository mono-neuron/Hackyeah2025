import prisma from "../config/prisma.js";
import type {
  LoginRequestHandler,
  RegisterAccountRequestHandler,
  TokenPayload,
} from "../types/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const TOKEN_EXPIRATION = Number(process.env.TOKEN_EXPIRATION ?? "24");
const TOKEN_EXPIRATION_IN_HOURS = 3600 * 1000 * TOKEN_EXPIRATION;
const STRATEGY_SECRET = process.env.STRATEGY_SECRET ?? "testowy_sekret";

export const registerAccount: RegisterAccountRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { email, phoneNumber, password } = req.body;

    const userFromDb = await prisma.account.findUnique({ where: { email } });

    if (userFromDb !== null) {
      res.status(409).send({ message: "This email has an account" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 15);

    await prisma.account.create({
      data: {
        type: "UNKNOWN",
        email: email,
        phone: phoneNumber,
        password: hashedPassword,
      },
    });
    res.send({
      message: "User registered correctly!",
    });
  } catch (error) {
    next(error);
  }
};

export const loginAccount: LoginRequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.account.findUnique({ where: { email } });

    if (!user) {
      res.status(400).send({ message: "Invalid login or password" });
      return;
    }

    const passwordComparision = await bcrypt.compare(password, user.password);

    if (passwordComparision) {
      const tokenPayload: TokenPayload = {
        email: user.email,
        type: user.type,
        expires: Date.now() + TOKEN_EXPIRATION_IN_HOURS,
      };
      const token = jwt.sign(tokenPayload, STRATEGY_SECRET);

      res.send({
        message: "Logged in succesfully!",
        token,
      });
    } else {
      res.status(400).send({
        message: "Invalid login or password",
      });
    }
  } catch (error) {
    next(error);
  }
};
