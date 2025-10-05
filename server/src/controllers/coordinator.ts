import prisma from "../config/prisma.js";
import type { getCoordinatedEventsRequestHandler } from "../types/coordinator.js";

export const getCoordinatedEvents: getCoordinatedEventsRequestHandler = async (
  req,
  res,
  next
) => {
  try {
    const { coordinatorId } = req.params;

    const events = await prisma.event.findMany({
      where: { coordinatorId: Number(coordinatorId) },
    });

    if (events.length === 0) {
      res.status(404).send({ message: "not found" });
      return;
    }

    res.send(events);
  } catch (error) {
    next(error);
  }
};
