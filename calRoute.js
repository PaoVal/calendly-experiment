import express from "express";
const {Route} = express;
const route = express.Router();

route.get("/", (req, res)=> res.render('calendar'));

export default route