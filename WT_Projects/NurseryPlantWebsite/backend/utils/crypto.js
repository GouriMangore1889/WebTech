const bcrypt = require("bcrypt");

const SALT = 10;

async function hashPassword(password) {
  return bcrypt.hash(password, SALT);
}

async function verifyPassword(password, hashed) {
  return bcrypt.compare(password, hashed);
}

module.exports = { hashPassword, verifyPassword };