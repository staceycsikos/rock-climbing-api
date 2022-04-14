import db from "../db/connection.js";
import Monster from "../models/monsters.js";
import monsters from "./monsters.json" assert { type: "json" };

const insertData = async () => {
  //reset db
  db.dropDatabase();
  let myMonsters = [];

  for (let i = 0; i < monsters.length; i++) {
    myMonsters.push({
      name: monsters[i].name,
      description: monsters[i].description,
      type: monsters[i].type,
      species: monsters[i].species,
    });
  }

  console.log(myMonsters);
  await Monster.insertMany(myMonsters);

  db.close();
};

insertData();
