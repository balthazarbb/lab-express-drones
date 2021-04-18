// Iteration #1
//connect to DB
require('../db')

//create Drone items and add to collection
const myDrones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
]

const mongoose  = require('mongoose');
//insert Drones to DB
const DroneExp = require('../models/Drone.model.js')
//insert data to DB
DroneExp.create(myDrones)
 .then(() => {
    console.log(myDrones)
//close connection
    mongoose.connection.close()
})
 .catch(() => {
    console.log("Nooo")
});