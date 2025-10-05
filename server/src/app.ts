import express, { json } from "express";
import { configDotenv } from "dotenv";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import passport from "passport";
import {
  AuthRouter,
  CoordinatorRouter,
  EventRouter,
  OrganisationRouter,
  VolunteerRouter,
} from "./routes/index.js";
import { configuredStrategy, openapiSpecification } from "./config/index.js";

configDotenv();

const PORT = Number(process.env.PORT) ?? 3000;
const app = express();

passport.use(configuredStrategy);
app.use(cors());
app.use(json());

app.use("/auth", AuthRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.use(passport.authenticate("jwt", { session: false }));
app.use("/event", EventRouter);
app.use("/volunteer", VolunteerRouter);
app.use("/coordinator", CoordinatorRouter);
app.use("/organisation", OrganisationRouter);

app.listen(PORT, () => {
  console.log(`[START] Server listening! PORT: ${PORT}`);
});
