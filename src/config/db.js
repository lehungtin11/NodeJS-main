const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("");
    // await mongoose.connect('mongodb+srv://[username]:[secretkey]@cluster0.37hj6ra.mongodb.net/[database]');
    console.log("Connect successfully");
  } catch (error) {
    console.log("ERROR!!!");
  }
}

module.exports = { connect };
