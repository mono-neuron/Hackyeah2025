import { prisma } from "../config/index.js";
import type {
  GetEventRequestHandler,
  GetEventsRequestHandler,
  GetEventVolunteersRequestHandler,
} from "../types/event.js";

export const getEvent: GetEventRequestHandler = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const event = await prisma.event.findUnique({
      where: { id: Number(eventId) },
    });

    if (event === null) {
      res.status(404).send({
        message: "Event not found",
      });
      return;
    }

    res.send(event);
  } catch (error) {
    next(error);
  }
};

export const getEventVolunteers: GetEventVolunteersRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { eventId } = req.params;

    const volunteers = await prisma.volunteer.findMany({
      where: {
        Task: {
          every: {
            eventId: Number(eventId),
          },
        },
      },
    });

    if (volunteers === null || volunteers.length === 0) {
      res.status(404).send({
        message: "Volunteers not found",
      });
      return;
    }

    res.send(volunteers);
  } catch (error) {
    next(error);
  }
};

export const getEvents: GetEventsRequestHandler = async (req, res, next) => {
  try {
    const events = await prisma.event.findMany({
      take: 50,
    });
    res.send(events);
  } catch (error) {
    next(error);
  }
};
