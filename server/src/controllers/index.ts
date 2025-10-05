import { getEvent, getEvents, getEventVolunteers, addEvent } from "./event.js";
import {
  getVolunteerInfo,
  getVolunteerOpinions,
  getVolunteerTasks,
} from "./volunteer.js";
import { getCoordinatedEvents } from "./coordinator.js";
import { registerAccount, loginAccount } from "./auth.js";
import { getOrganisationInfo } from "./organisation.js";

const EventController = { getEvent, getEvents, getEventVolunteers, addEvent };
const VolunteerController = {
  getVolunteerInfo,
  getVolunteerOpinions,
  getVolunteerTasks,
};
const CoordinatorController = {
  getCoordinatedEvents,
};

const AuthController = {
  registerAccount,
  loginAccount,
};

const OrganisationController = {
  getOrganisationInfo,
};

export {
  EventController,
  VolunteerController,
  CoordinatorController,
  AuthController,
  OrganisationController,
};
