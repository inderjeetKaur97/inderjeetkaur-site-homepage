const express= require("express");
const path = require("path");
var exphbs  = require('express-handlebars');
const app = express();
const port = process.env.PORT||300

//---------static files path------------
const publicPath = path.join(__dirname,("/public"))
app.use(express.static(publicPath))

//---------views folder path------------
app.set("views",path.join(__dirname,"/views"))
app.set("view engine","hbs")
app.engine(
    "hbs",
    exphbs({
      extname: "hbs",
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "/views/layouts"),
      partialsDir: path.join(__dirname, "/views/partials"),
    })
  );

//---------Routes from routes folder ------------
app.use("/", require(path.join(__dirname, "routes/routes.js")));
app.use("/home", require(path.join(__dirname, "routes/routes.js")));










  app.listen(port,()=>{
      console.log(`Listening at port ${port}`)
  })
