const mongoose = require("mongoose");

let uri = "mongodb+srv://Lane17027:Lane17027@cmonluster0.edoucjb.mongodb.net/?appName=Cluster0"
mongoose
  .connect(uri)
  .then(() => {
    console.log(`Successfully connected to ${uri}`);
  })
  .catch((e) => {
    console.error("Connection error", e.message);
  });

 mongoose.set('debug', true)
const db = mongoose.connection;

module.exports = db;
