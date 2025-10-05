import prisma from "../config/prisma.js";
import type { RegisterAccountRequestHandler } from "../types/auth.js";
import bcrypt from "bcrypt";

const registerAccount: RegisterAccountRequestHandler = async (
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

export default registerAccount;
