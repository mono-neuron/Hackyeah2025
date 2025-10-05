import { getEvent, getEvents, getEventVolunteers } from "./event.js";
import {
  getVolunteerInfo,
  getVolunteerOpinions,
  getVolunteerTasks,
} from "./volunteer.js";
import { getCoordinatedEvents } from "./coordinator.js";

const EventController = { getEvent, getEvents, getEventVolunteers };
const VolunteerController = {
  getVolunteerInfo,
  getVolunteerOpinions,
  getVolunteerTasks,
};
const CoordinatorController = {
  getCoordinatedEvents,
};

export { EventController, VolunteerController, CoordinatorController };
