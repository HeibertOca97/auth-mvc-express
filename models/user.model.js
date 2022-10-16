var { connection, connect } = require('./connection');

function getSessions(){
  connect();
  connection.query('SELECT * FROM sessions', function (error, results, fields) {
    //if (error) console.error('error consult: ' + error);
    if(error) throw error;
    console.log('The session_id is: ', results[0].session_id);
  });  
  connection.end();
}






module.exports = getSessions;
