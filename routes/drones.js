const express = require('express');
//model allows to access the DB for managing our collection
const DroneExp = require("../models/Drone.model");
const router = express.Router();

// require the Drone model here

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneExp.find()
  .then((myDrones) => {
    console.log(myDrones);
    //render to view all drones
    res.render("drones/list.hbs", {myDrones} )
  }).catch((err) => {
    
  });
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  //render form to user
res.render('drones/create-form.hbs')
    
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  // use infos to create a new element in DB
  DroneExp.create ({name, propellers, maxSpeed})
  .then((myDrones) => {
    //sends user to the list of drones after new drone is created
    res.redirect("/drones")
  })
  .catch((err) => {
    console.log("oh nooo")
  });
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  //destructing
  const {id} = req.params;
  // = req.body;
  DroneExp.findById(id)
  .then((myDrones) => {
    res.render("drones/update-form.hbs", {myDrones})
  })
  .catch((err) => {
    console.log("hell no");
  });
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id}= req.params;
  const {name, propellers, maxSpeed}=req.body
  DroneExp.findByIdAndUpdate(id, {name, propellers, maxSpeed})
  .then((myDrones) => {
    res.redirect("/drones");
  }).catch((err) => {
    console.log("Seriously??");
    res.render("drones/update-form.hbs")
  });
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  const{id} = req.params
  DroneExp.findByIdAndRemove(id)
  .then((myDrones) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    console.log("Still there!!");
  });
});
// dont know what im doing wrong... cant delete...
module.exports = router;
