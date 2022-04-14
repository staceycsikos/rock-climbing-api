import Gym from "../models/gyms.js";

export const getGyms = async (request, response) => {
  try {
    const gyms = await Gym.find();
    response.json(gyms);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const getGym = async (request, response) => {
  try {
    const { id } = request.params;
    const gym = await Gym.findById(id);
    if (gym) {
      return response.json(gym);
    }
    response.status(400).json({ message: "Gym has not been created" });
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const createGym = async (request, response) => {
  try {
    const gym = new Gym(request.body);
    await gym.save();
    response.status(201).json(gym);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const updateGym = async (request, response) => {
  try {
    const { id } = request.params;
    const gym = await Gym.findByIdAndUpdate(id, request.body);
    response.status(200).json(gym);
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};

export const deleteGym = async (request, response) => {
  try {
    const { id } = request.params;
    const deleted = await Gym.findByIdAndDelete(id);

    if (deleted) {
      return response.status(200).json(deleted + " has been removed");
    }
    throw new Error("Gym not created... yet!");
  } catch (error) {
    console.log(error);
    response.status(500).json({ error: error.message });
  }
};
