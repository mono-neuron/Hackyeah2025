import express, { json } from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import {
  CoordinatorRouter,
  EventRouter,
  VolunteerRouter,
} from "./routes/index.js";
import swaggerUi from "swagger-ui-express";
import openapiSpecification from "./config/swaggerJsDoc.js";

configDotenv();

const PORT = Number(process.env.PORT) ?? 3000;
const app = express();

app.use(cors());
app.use(json());

app.use("/event", EventRouter);
app.use("/volunteer", VolunteerRouter);
app.use("/coordinator", CoordinatorRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(PORT, () => {
  console.log(`[START] Server listening! PORT: ${PORT}`);
});
