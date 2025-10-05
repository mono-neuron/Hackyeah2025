import type { RequestHandler } from "express";
import type { Organisation } from "../generated/prisma/index.js";
import type { MessageResponse } from "./general.js";

// get organisation profile
interface GetOrganisationProfileParams {
  organisationId: string;
}

export type GetOrganisationProfileRequestHandler = RequestHandler<
  GetOrganisationProfileParams,
  MessageResponse | Organisation
>;
