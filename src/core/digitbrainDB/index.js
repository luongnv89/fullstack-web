const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
// Schemas
const RomSchema = require('./schemas/RomSchema');

function DGBrainDB(host, port, dbName, auth = null) {
  this.host = host;
  this.port = port;
  this.dbName = dbName;
  this.auth = auth;
  this.isConnected = false;
}

DGBrainDB.prototype.connect = function(callback) {

  if (this.isConnected) {
    console.log('[DGBrainDB] Already connected!');
    return callback();
  }

  const connString = `mongodb://${this.host}:${this.port}`;

  console.log("[DGBrainDB] Connection string: ", connString);

  const connectOptions = {
    dbName: this.dbName,
    useNewUrlParser: true,
    autoIndex: false
  };

  if (this.auth) {
    connectOptions['user'] = this.auth.username;
    connectOptions['pass'] = this.auth.password;
  }

  mongoose.connect(connString, connectOptions, error => {
    if (error) {
      console.error('[DGBrainDB] ',error);
      return callback(error);
    }
    console.log("[DGBrainDB] New connection to database has been established!");
    this.isConnected = true;
    return callback(null);
  });
};

DGBrainDB.prototype.close = function() {
  console.log("[DGBrainDB] Going to close the connection");
  mongoose.disconnect();
};

module.exports = {
  DGBrainDB,
  RomSchema,
};