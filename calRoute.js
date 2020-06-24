import express from "express";
const {Route} = express;

const route = express.Router();

route.get("/", (req, res)=> res.render('calendly'));
route.get("/googlatient", (req, res) => res.render('googlatient'));
route.get("/goovider", (req, res) => res.render('goovider'));

export default route