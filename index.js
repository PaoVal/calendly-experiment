import express from "express"
import calRoute from "./calRoute.js";

import layouts from "express-ejs-layouts";

const app = express();
const PORT = 8000

//const __dirname = path.resolve();

// ejs
app.use(layouts);
// find the views folder
app.set('views', './views');
// set engine
app.set('view engine', 'ejs');

app.use(express.json());
// form submissions handled
app.use(express.urlencoded({extended: false}));


app.use("/", calRoute);

app.listen(PORT);
console.log(`listening on ${PORT}`);