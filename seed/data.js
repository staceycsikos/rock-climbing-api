import db from "../db/connection.js";
import Gym from "../models/gym.js";
import gyms from "./gyms.json" assert { type: "json" };

const insertData = async () => {
  //reset db
  await db.dropDatabase();

  await Gym.insertMany(gyms);

  db.close();
};

insertData();
