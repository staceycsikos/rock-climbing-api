import { Router } from "express";
//only some of the functions of express

import gymsRoutes from "./gyms.js";

const router = Router();

router.get("/", (request, response) =>
  response.send("This is the api root, nothing crazy here.")
);
router.use("/", gymsRoutes);

export default router;
