import { Router } from "express";
import { OrganisationController } from "../controllers/index.js";

const OrganisationRouter = Router();

/**
 * @swagger
 * /organisation/{organisationId}:
 *   get:
 *     summary: Get organisation by ID
 *     description: Retrieves details of an organisation by its unique ID.
 *     tags:
 *       - Organisations
 *     parameters:
 *       - in: path
 *         name: organisationId
 *         required: true
 *         description: The ID of the organisation
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Organisation found and returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 name:
 *                   type: string
 *                   example: "Green Earth Foundation"
 *                 email:
 *                   type: string
 *                   example: "contact@greenearth.org"
 *                 phone:
 *                   type: string
 *                   example: "+48123456789"
 *                 address:
 *                   type: string
 *                   example: "123 Eco Street, Warsaw"
 *                 # Add more fields here if your Organisation model includes them
 *       404:
 *         description: Organisation not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Organisation not found"
 *       500:
 *         description: Internal server error
 */

OrganisationRouter.get(
  "/:organisationId",
  OrganisationController.getOrganisationInfo
);

export default OrganisationRouter;
