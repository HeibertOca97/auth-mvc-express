var { connection, connect } = require('./connection');
var {
  createPasswordAndGetHash,
  comparePassword
} = require('../lib/bcrypt.lib');

const getSessions = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM sessions', function (error, results, fields) {
      if(error) {
        reject(error);
        return '';
      }
      resolve(results[0]);
    });
  });
}

const destroySession  = (session_id) => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM sessions WHERE session_id = ?', [session_id], function (error, results, fields) {
      if(error) {
        reject(error);
        return '';
      }
      results.message = "Session destroyed successfully!";
      resolve(results);
    });
  });
}

const validationCredentials = (body) => {
  const { email, password } = body;

  return new Promise((resolve, reject) => {
    connection.query('SELECT username, email, password FROM users WHERE email =  ? LIMIT 1', [email], function (error, results, fields) {
      if(error || !comparePassword(password, results[0].password)) {
        reject("The credentials are not correct");
        return '';
      }

      resolve(results[0]);
    });
  });
}

const create = (body) => {
  const { username, email, password } = body;

  const passwordHash = createPasswordAndGetHash(password).toString();

  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, passwordHash], function(error, results, fields){
      if (error){
        reject(error);
        return '';
      }
      results.message = 'Successfully created!'; 
      resolve(results);
    });
  });


}

module.exports = {
  getSessions, 
  create,
  validationCredentials,
  destroySession,
}
