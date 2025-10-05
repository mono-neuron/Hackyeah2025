import prisma from "../config/prisma.js";
import type {
  GetVolunteerInfoRequestHandler,
  GetVolunteerOpinionsRequestHandler,
  GetVolunteerTasksRequestHandler,
} from "../types/volunteer.js";

export const getVolunteerInfo: GetVolunteerInfoRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { volunteerId } = req.params;

    const volunteer = await prisma.volunteer.findUnique({
      where: { id: Number(volunteerId) },
    });

    if (volunteer === null) {
      res.status(404).send({
        message: "Volunteer not found",
      });
      return;
    }
    res.send(volunteer);
  } catch (error) {
    next(error);
  }
};

export const getVolunteerOpinions: GetVolunteerOpinionsRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { volunteerId } = req.params;

    const opinions = await prisma.opinion.findMany({
      where: { volunteerId: Number(volunteerId) },
    });

    if (opinions === null) {
      res.status(404).send({ message: "Opinions not found" });
      return;
    }

    res.send(opinions);
  } catch (error) {
    next(error);
  }
};

export const getVolunteerTasks: GetVolunteerTasksRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { eventId, volunteerId } = req.params;

    const tasks = await prisma.task.findMany({
      where: {
        VolunteerId: Number(volunteerId),
        eventId: Number(eventId),
      },
    });

    if (tasks.length === 0) {
      res.status(404).send({
        message: "tasks not found",
      });
      return;
    }

    res.send(tasks);
  } catch (error) {
    next(error);
  }
};
