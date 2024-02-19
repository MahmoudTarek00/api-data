const express = require('express');
const UserController = require('../contorl/usercontroller');
const sensorController = require('../contorl/sensorcontroller');

const router=require('express').Router();

// Define a simple route to test
router.get("/", (req, res,next) => {
  res.send("Hello, world!");
});
router.get("/ahmed", (req, res,next) => {
  res.send("Hello, world");
});
router.get("/allusers", UserController.getallUsers)
router.post("/adduser", UserController.addnewuser)
router.post("/edituser", UserController.updateuser)
router.post("/edituser", UserController.deleteuser)

router.get("/allsensor", sensorController.getallsensors)
router.post("/addsensor", sensorController.addnewsensor)
router.post("/editsensor", sensorController.updatesensor)
router.post("/edituser", sensorController.deletesensor)





module.exports = router;