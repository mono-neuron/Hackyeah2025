import type { RequestHandler } from "express";
import type { MessageResponse } from "./general.js";
import type { Event } from "../generated/prisma/index.js";

// get coordinated events
interface GetCoordinatedEventsParams {
  coordinatorId: string;
}

export type getCoordinatedEventsRequestHandler = RequestHandler<
  GetCoordinatedEventsParams,
  MessageResponse | Event[]
>;
