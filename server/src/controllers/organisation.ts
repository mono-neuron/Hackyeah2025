import type { RequestHandler } from "express";
import prisma from "../config/prisma.js";

export const getOrganisationInfo: RequestHandler = async (req, res, next) => {
  try {
    const { organisationId } = req.params;

    const organisation = await prisma.organisation.findUnique({
      where: { id: Number(organisationId) },
    });

    if (organisation === null) {
      res.status(404).send({ message: "Organisation not found" });
      return;
    }
    res.send(organisation);
  } catch (error) {
    next(error);
  }
};
