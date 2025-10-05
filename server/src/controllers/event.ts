import { prisma } from "../config/index.js";
import type {
  AddEventRequestHandler,
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

export const addEvent: AddEventRequestHandler = async (req, res, next) => {
  try {
    const {
      name,
      description,
      startDate,
      endDate,
      category,
      street,
      buildingNumber,
      apartmentNumber,
      zipCode,
      city,
      over18,
      volunteersCount,
      organisationId,
      tasks,
    } = req.body;

    const eventData = {
      name,
      description,
      start_date: startDate,
      end_date: endDate,
      Category: {
        connect: { name: category },
      },
      street,
      apartment_number: apartmentNumber,
      building_number: buildingNumber,
      zip_code: zipCode,
      city: city,
      over18: over18,
      volunteersCount: Number(volunteersCount),
      Organisation: {
        connect: { id: Number(organisationId) },
      },
      position: "",
    };

    const event = await prisma.event.create({
      data: eventData,
    });

    await tasks.forEach((task) => (task.eventId = event.id));

    prisma.task.createMany({
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
};
