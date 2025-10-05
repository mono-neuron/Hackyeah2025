import type { RequestHandler } from "express";
import type { Opinion, Task, Volunteer } from "../generated/prisma/index.js";
import type { MessageResponse } from "./general.js";

// get volunteer general info
interface GetVolunteerInfoParams {
  volunteerId: string;
}

export type GetVolunteerInfoRequestHandler = RequestHandler<
  GetVolunteerInfoParams,
  Volunteer | MessageResponse
>;

// get volunteer opinions
interface GetVolunteerOpinionsParams {
  volunteerId: string;
}
export type GetVolunteerOpinionsRequestHandler = RequestHandler<
  GetVolunteerOpinionsParams,
  MessageResponse | Opinion[]
>;

// get volunteer tasks
interface GetVolunteerTasksParams {
  volunteerId: string;
  eventId: string;
}

export type GetVolunteerTasksRequestHandler = RequestHandler<
  GetVolunteerTasksParams,
  MessageResponse | Task[]
>;
