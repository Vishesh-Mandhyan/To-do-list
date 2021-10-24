const mongoose = require("mongoose");
const connectedDB = (url) => {
  return mongoose.connect(url);
};
module.exports = connectedDB;
// mongoose
//   .connect(connectionString)
//   .then(() => console.log("connected successfully"))
//   .catch((err) => console.log(err));
