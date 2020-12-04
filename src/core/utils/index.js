const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const readDir = (dirPath, callback) => {
  fs.readdir(dirPath, callback);
};

/**
 * Read JSON file and return an JSON object
 * @param {String} filePath Path to file
 */
const readJSONFileSync = (filePath) => {
  try {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

/**
 * Read async a JSON file
 * @param {String} filePath The path to the data file
 * @param {Function} callback The callback function
 */
const readJSONFile = (filePath, callback) => {
  try {
    fs.readFile(filePath, (err, data) => {
      if (err) return callback(err);
      const jsonData = JSON.parse(data);
      return callback(null, jsonData);
    })
  } catch (error) {
    return callback(error);
  }
}

/**
 * Write a string data to a file
 * @param {String} filePath Path to the output file
 * @param {String} data data to be written
 * @param {Function} callback The callback function
 * @param {Boolean} isOverwrite The flag to indicate if the file should be overwrite or not
 */
const writeToFile = (_filePath, data, callback, isOverwrite = false) => {
  let filePath = _filePath;
  if (!isOverwrite) {
    if (fs.existsSync(filePath)) {
      // Need to change the file name;
      const extName = path.extname(_filePath);
      filePath = `${_filePath.replace(extName, '')}-${Date.now()}${extName}`;
    }
  }

  try {
    fs.writeFile(filePath, data, (err, result) => {
      if (err) return callback(err);
      return callback(null, result);
    });
  } catch (error) {

  }
}

/**
 * Delete a file
 * @param {String} filePath The path to the text file
 * @param {Function} callback The callback function
 */
const deleteFile = (filePath, callback) => {
  try {
    fs.unlink(filePath,callback);
  } catch (error) {
    return callback(error);
  }
}

/**
 * Read the text file
 * @param {String} filePath The path to the text file
 * @param {Function} callback The callback function
 */
const readTextFile = (filePath, callback) => {
  try {
    fs.readFile(filePath, (err, content) => {
      if (err) return callback(err);
      return callback(null, content.toString());
    })
  } catch (error) {
    return callback(error);
  }
}

/**
 * Generate a random boolean value
 */
const randomBoolean = () => Math.random() < 0.5 ? 0: 1;

/**
 * Generate randomly an integer value in a range
 * @param {Number} min The minimum integer value
 * @param {Number} max The maximum integer value
 */
const randomIntegerValue = (min, max) => {
  const rand = Math.random();
  return Math.round(min + rand * (max-min));
}

/**
 * Generate randomly a double value in a range
 * @param {Number} min The minimum double value
 * @param {Number} max The maximum double value
 */
const randomDoubleValue = (min, max) => {
  const rand = Math.random();
  return Math.round(100*(min + rand * (max-min)))/100;
}

/**
 * Get the smallest number in an array
 * @param {Array} array list of number
 */
const getMin = (array) => {
  if (!array || array.length === 0) return null;
  let min = array[0];
  for (let index = 0 ; index < array.length; index++) {
    min = min < array[index] ? min : array[index];
  }
  return min;
}

/**
 * Get the biggest number in an array
 * @param {Array} array list of number
 */
const getMax = (array) => {
  if (!array || array.length === 0) return null;
  let max = array[0];
  for (let index = 0 ; index < array.length; index++) {
    max = max > array[index] ? max : array[index];
  }
  return max;
};

const getObjectId = (str) => {
  return crypto.createHash('md5').update(str).digest('hex');
};

module.exports = {
  randomDoubleValue,
  randomPoisonDoubleValue,
  randomIntegerValue,
  randomPoisonIntegerValue,
  randomBoolean,
  getMin,
  getMax,
  readJSONFile,
  readJSONFileSync,
  readTextFile,
  writeToFile,
  readDir,
  deleteFile,
  getObjectId,
}