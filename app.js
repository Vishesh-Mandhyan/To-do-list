const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectedDB = require("./db/connect");
const NotFound=require('./middleware/Not-found')
const errorHandler = require('./middleware/error-handler');
require("dotenv").config();
app.use(express.static("./public"));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("task manager app");
});
app.use("/api/v1/tasks", tasks);
app.use(NotFound)
app.use(errorHandler)
const port = process.env.PORT || 3000
const start = async () => {
  try {
    await connectedDB(process.env.MONGO_URL);
    app.listen(port, console.log("server is listening"));
  } catch (error) {
    console.log(error);
  }
};
start();
