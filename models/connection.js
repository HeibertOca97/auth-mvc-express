var mysql = require('mysql');


var options = {
  host: '127.0.0.1',
  port: 3306,
  user: 'root',
  password: '',
  database: 'db.course_node',
}

var connection = mysql.createConnection(options);

function connect() {
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      throw err;
    }

    console.log('connected as id ' + connection.threadId);
  });
}


module.exports = {
  connection,
  options,
  connect
};
