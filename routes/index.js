import { Router } from "express";
import gymsRoutes from "./gym.js";
//only some of the functions of express

const router = Router();

router.get("/", (request, response) =>
  response.send("This is the api root, nothing crazy here.")
);
router.use("/", gymsRoutes);

export default router;
