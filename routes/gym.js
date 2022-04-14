import { Router } from "express";
import * as controllers from "../controllers/gyms.js";

const router = Router();

router.get("/gyms", controllers.getGyms);
router.get("/gyms/:id", controllers.getGym);
router.post("/gyms", controllers.createGym);
router.put("/gyms/:id", controllers.updateGym);
router.delete("/gyms/:id", controllers.deleteGym);

export default router;
