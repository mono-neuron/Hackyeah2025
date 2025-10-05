import { Router } from "express";
import { CoordinatorController } from "../controllers/index.js";

const CoordinatorRouter = Router();

/**
 * @swagger
 * /coordinator/{coordinatorId}/events:
 *   get:
 *     summary: Get events coordinated by a specific coordinator
 *     description: Retrieves a list of events assigned to the specified coordinator.
 *     tags:
 *       - Coordinators
 *       - Events
 *     parameters:
 *       - in: path
 *         name: coordinatorId
 *         required: true
 *         description: The ID of the coordinator
 *         schema:
 *           type: integer
 *           example: 5
 *     responses:
 *       200:
 *         description: List of events coordinated by the coordinator
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 12
 *                   name:
 *                     type: string
 *                     example: "Youth Volunteer Fair"
 *                   description:
 *                     type: string
 *                     example: "A fair connecting youth with local volunteer opportunities."
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
 *                     example: "10A"
 *                   apartment_number:
 *                     type: string
 *                     nullable: true
 *                     example: "3B"
 *                   start_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-10T09:00:00Z"
 *                   end_date:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-12-10T15:00:00Z"
 *                   categoryId:
 *                     type: integer
 *                     example: 2
 *                   coordinatorId:
 *                     type: integer
 *                     example: 5
 *       404:
 *         description: No events found for the specified coordinator
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "not found"
 *       500:
 *         description: Internal server error
 */
CoordinatorRouter.get(
  "/:coordinatorId/events",
  CoordinatorController.getCoordinatedEvents
);

export default CoordinatorRouter;
