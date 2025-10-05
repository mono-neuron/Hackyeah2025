import { getEvent, getEvents, getEventVolunteers, addEvent } from "./event.js";
import {
  getVolunteerInfo,
  getVolunteerOpinions,
  getVolunteerTasks,
} from "./volunteer.js";
import { getCoordinatedEvents } from "./coordinator.js";
import register from "./auth.js";
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
  register,
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
