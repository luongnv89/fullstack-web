/**
 * {
    "name": "ROM-01",
    "lastModified": 1555510437786,
  }
 */

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const romSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    lastModified: {
      type: Number,
      required: true
    },
  }
);

romSchema.statics.findRomsWithOptions = function(options, callback) {
  this.find(options)
    .sort({ lastModified: 1 })
    .exec((err, stats) => {
      if (err) {
        return callback(err);
      }

      if (!stats) {
        return callback({ error: `Cannot find any rom` });
      }

      return callback(null, stats);
    });
};

romSchema.statics.findRomDataBetweenTimes = function(
  filter,
  startTime,
  endTime,
  callback
) {

  const options = {
    $and: [
      {
        lastModified: {
          $gte: Number(startTime)
        }
      },
      {
        lastModified: {
          $lte: Number(endTime)
        }
      }
    ]
  };

  if (filter) {
    options['$and'].push(filter);
  }
  return this.findRomsWithOptions(options, callback);
};

module.exports = mongoose.model("Rom", romSchema);
