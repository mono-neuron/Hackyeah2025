import type { RequestHandler } from "express";
import type { MessageResponse } from "./general.js";
import type { Event, Volunteer } from "../generated/prisma/index.js";

// get single event
interface GetEventParams {
  eventId: string;
}

export type GetEventRequestHandler = RequestHandler<
  GetEventParams,
  MessageResponse | Event
>;

// get all events
export type GetEventsRequestHandler = RequestHandler<null, Event[]>;

// get volunteers signed for event
interface GetEventVolunteersParams {
  eventId: string;
}

export type GetEventVolunteersRequestHandler = RequestHandler<
  GetEventVolunteersParams,
  MessageResponse | Volunteer[]
>;
