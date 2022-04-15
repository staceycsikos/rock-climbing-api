import db from "./db/connection.js";
import routes from "./routes/index.js";

import express from "express";
import cors from "cors";
import logger from "morgan";
import chalk from "chalk";
import passportInt from "./config/passport.js";

const app = express();
const PORT = process.env.PORT || 3000;
const passport = passportInt();

//user
// const passport = require("../config/passport.js")();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

//user
app.use("/api", routes);
app.use(passport.initialize());

//listening for connect on the database
db.on("connected", () => {
  console.clear();
  console.log(chalk.blue("Connectd to MongoDB!"));
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}\n\n`)
      : console.log(
          `Express server running in development on: http://localhost:${PORT}`
        );
  });
});
