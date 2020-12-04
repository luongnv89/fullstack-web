const { DGBrainDB } = require("./index");

const mydb = new DGBrainDB("localhost", 27017, "dgbraindb");
mydb.connect(() => {
  console.log('connected to database');
});
