var bcrypt = require("bcrypt");
const saltRounds = 10;

const comparePassword = (password, passwordHash) => {
  return bcrypt.compareSync(password, passwordHash);
}

const createPasswordAndGetHash = (password) => {
  const saltOrRounds = bcrypt.genSaltSync(saltRounds);

  return bcrypt.hashSync(password, saltOrRounds);
}

module.exports = {
  comparePassword,
  createPasswordAndGetHash,
}

