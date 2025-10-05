import { Router } from "express";
import { EventController } from "../controllers/index.js";

const EventRouter = Router();

/**
 * @swagger
 * /event/{eventId}:
 *   get:
 *     summary: Get event by ID
 *     description: Retrieves a single event by its unique ID.
 *     tags:
 *       - Events
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: The ID of the event to retrieve.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Successful response with event data
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
 *                   example: "Community Cleanup"
 *                 description:
 *                   type: string
 *                   example: "A local community event for neighborhood cleanup."
 *                 street:
 *                   type: string
 *                   example: "Main St"
 *                 city:
 *                   type: string
 *                   example: "Springfield"
 *                 zip_code:
 *                   type: string
 *                   example: "12345"
 *                 building_number:
 *                   type: string
 *                   example: "42B"
 *                 apartment_number:
 *                   type: string
 *                   nullable: true
 *                   example: "7A"
 *                 start_date:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-11-01T10:00:00Z"
 *                 end_date:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-11-01T14:00:00Z"
 *                 categoryId:
 *                   type: integer
 *                   example: 2
 *                 coordinatorId:
 *                   type: integer
 *                   nullable: true
 *                   example: 5
 *       404:
 *         description: Event not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Event not found"
 *       500:
 *         description: Internal server error
 */
EventRouter.get("/:eventId", EventController.getEvent);

/**
 * @swagger
 * /event:
 *   get:
 *     summary: Get a list of events
 *     description: Retrieves a list of events.
 *     tags:
 *       - Events
 *     responses:
 *       200:
 *         description: A list of events
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: "Community Cleanup"
 *                   description:
 *                     type: string
 *                     example: "A local community event for neighborhood cleanup."
 *                   street:
 *                     type: string
 *                     example: "Main St"
 *                   city:
 *                     type: string
 *                     example: "Springfield"
 *                   zip_code:
 *                     type: string
 *                     example: "12345"
 *                   building_number:
 *                     type: string
 *                     example: "42B"
 *                   apartment_number:
 *                     type: string
 *                     nullable: true
 *                     example: "7A"
 *                   start_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-11-01T10:00:00Z"
 *                   end_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-11-01T14:00:00Z"
 *                   categoryId:
 *                     type: integer
 *                     example: 2
 *                   coordinatorId:
 *                     type: integer
 *                     nullable: true
 *                     example: 5
 *       500:
 *         description: Internal server error
 */
EventRouter.get("/", EventController.getEvents);

/**
 * @swagger
 * /event/{eventId}/volunteers:
 *   get:
 *     summary: Get volunteers for an event
 *     description: Retrieves a list of volunteers assigned to a specified event.
 *     tags:
 *       - Events
 *       - Volunteers
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: The ID of the event to retrieve volunteers for.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: List of volunteers for the event
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 10
 *                   name:
 *                     type: string
 *                     example: "John"
 *                   surname:
 *                     type: string
 *                     example: "Doe"
 *                   street:
 *                     type: string
 *                     example: "Main St"
 *                   city:
 *                     type: string
 *                     example: "Springfield"
 *                   zip_code:
 *                     type: string
 *                     example: "12345"
 *                   house_number:
 *                     type: string
 *                     example: "42B"
 *                   apartment_number:
 *                     type: integer
 *                     nullable: true
 *                     example: 7
 *                   birthdate:
 *                     type: string
 *                     format: date-time
 *                     example: "1990-05-15T00:00:00Z"
 *                   organisationId:
 *                     type: integer
 *                     example: 3
 *                   coordinatorId:
 *                     type: integer
 *                     nullable: true
 *                     example: 5
 *                   AccountId:
 *                     type: integer
 *                     example: 10
 *       404:
 *         description: Volunteers not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Volunteers not found"
 *       500:
 *         description: Internal server error
 */
EventRouter.get("/:eventId/volunteers", EventController.getEventVolunteers);

export default EventRouter;
