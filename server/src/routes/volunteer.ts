import { Router } from "express";
import { VolunteerController } from "../controllers/index.js";

const VolunteerRouter = Router();

/**
 * @swagger
 * /volunteer/{volunteerId}:
 *   get:
 *     summary: Get volunteer by ID
 *     description: Retrieves a single volunteer by their unique ID.
 *     tags:
 *       - Volunteers
 *     parameters:
 *       - in: path
 *         name: volunteerId
 *         required: true
 *         description: The ID of the volunteer to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Volunteer data retrieved successfully
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
 *                   example: "John"
 *                 surname:
 *                   type: string
 *                   example: "Doe"
 *                 street:
 *                   type: string
 *                   example: "Main St"
 *                 city:
 *                   type: string
 *                   example: "Springfield"
 *                 zip_code:
 *                   type: string
 *                   example: "12345"
 *                 house_number:
 *                   type: string
 *                   example: "42B"
 *                 apartment_number:
 *                   type: integer
 *                   nullable: true
 *                   example: 7
 *                 birthdate:
 *                   type: string
 *                   format: date-time
 *                   example: "1990-05-15T00:00:00Z"
 *                 organisationId:
 *                   type: integer
 *                   example: 3
 *                 coordinatorId:
 *                   type: integer
 *                   example: 5
 *                   nullable: true
 *                 AccountId:
 *                   type: integer
 *                   example: 10
 *       404:
 *         description: Volunteer not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Volunteer not found"
 *       500:
 *         description: Internal server error
 */
VolunteerRouter.get("/:volunteerId", VolunteerController.getVolunteerInfo);

/**
 * @swagger
 * /volunteer/{volunteerId}/opinions:
 *   get:
 *     summary: Get opinions for a volunteer
 *     description: Retrieves a list of opinions for a specified volunteer.
 *     tags:
 *       - Volunteers
 *       - Opinions
 *     parameters:
 *       - in: path
 *         name: volunteerId
 *         required: true
 *         description: The ID of the volunteer whose opinions are requested.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: List of opinions retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 101
 *                   content:
 *                     type: string
 *                     example: "Very committed and helpful volunteer."
 *                   organisationId:
 *                     type: integer
 *                     example: 7
 *                   volunteerId:
 *                     type: integer
 *                     example: 1
 *       404:
 *         description: Opinions not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Opinions not found"
 *       500:
 *         description: Internal server error
 */
VolunteerRouter.get(
  "/:volunteerId/opinions",
  VolunteerController.getVolunteerOpinions
);

/**
 * @swagger
 * /volunteer/{volunteerId}/event/{eventId}/tasks:
 *   get:
 *     summary: Get volunteer's tasks for an event
 *     description: Retrieves all tasks assigned to a specific volunteer for a specific event.
 *     tags:
 *       - Volunteers
 *       - Events
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: volunteerId
 *         required: true
 *         description: ID of the volunteer
 *         schema:
 *           type: integer
 *           example: 1
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: ID of the event
 *         schema:
 *           type: integer
 *           example: 2
 *     responses:
 *       200:
 *         description: List of tasks for the volunteer in the event
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 101
 *                   name:
 *                     type: string
 *                     example: "Setup chairs"
 *                   VolunteerId:
 *                     type: integer
 *                     nullable: true
 *                     example: 1
 *                   eventId:
 *                     type: integer
 *                     example: 2
 *       404:
 *         description: No tasks found for the specified volunteer and event
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "tasks not found"
 *       500:
 *         description: Internal server error
 */
VolunteerRouter.get(
  "/:volunteerId/event/:eventId/tasks",
  VolunteerController.getVolunteerTasks
);

export default VolunteerRouter;
