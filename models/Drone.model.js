// Iteration
// require schema and model from mongoose
const { Schema, model } = require("mongoose")

// Schema is the format our DB elements will have
const droneSchema = new Schema({
  name: String,
  // number right?
  propellers: Number,
  maxSpeed: Number,
},)

// this will create the model we use for accesing the drone collection
const DroneExp = model("DroneExp", droneSchema) 

module.exports = DroneExp 
