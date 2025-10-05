// register

import type { RequestHandler } from "express";
import type { MessageResponse } from "./general.js";

interface RegisterAccountReqBody {
  email: string;
  phoneNumber: string;
  password: string;
}

export type RegisterAccountRequestHandler = RequestHandler<
  {},
  MessageResponse,
  RegisterAccountReqBody
>;
