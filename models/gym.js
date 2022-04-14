import mongoose from "mongoose";

const Schema = mongoose.Schema;

let Gym = new Schema({
  name: String,
  location: {
    fullAddress: String,
    address: String,
    city: String,
    state: String,
    zipcode: String,
  },
  phoneNumber: Number,
  image: String,
  oneDayPass: Number,
  membership: Number,
  rentalGear: Number,
  autoBelay: Boolean,
  bouldering: Boolean,
  topRoping: Boolean,
  url: String,
});

export default mongoose.model("gyms", Gym);
