const cors = require("cors");
const express = require("express");
const formidable = require("express-formidable");

const app = express();
app.use(formidable());
app.use(cors());

//ROUTES IMPORT
const restautantRoutes = require("./routes/restaurant");
app.use(restautantRoutes);

app.all("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.listen("3100", () => {
  console.log("Server has started");
});
