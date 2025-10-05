import type { RequestHandler } from "express";
import type { MessageResponse } from "./general.js";

export interface TokenPayload {
  email: string;
  type: string;
  expires: number;
}

// register
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

// login
interface LoginReqBody {
  email: string;
  password: string;
}

interface LoginResBody extends MessageResponse {
  token?: string;
}

export type LoginRequestHandler = RequestHandler<
  {},
  LoginResBody,
  LoginReqBody
>;
