import { Router } from "express";
import { AuthController } from "../controllers/index.js";

const AuthRouter = Router();

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new account
 *     description: Creates a new account with email, phone number, and password.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - phoneNumber
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: "jane.doe@example.com"
 *               phoneNumber:
 *                 type: string
 *                 example: "+1234567890"
 *               password:
 *                 type: string
 *                 format: password
 *                 example: "StrongPassword123!"
 *     responses:
 *       200:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "User registered correctly!"
 *       409:
 *         description: Email already exists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "This email has an account"
 *       500:
 *         description: Internal server error
 */
AuthRouter.post("/register", AuthController.register);

export default AuthRouter;
