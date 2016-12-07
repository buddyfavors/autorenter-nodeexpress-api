'use strict';

function postLog(req, res) {
  /*eslint no-console: 0 */
  if(!req.body.message){
    res.status(500).json({ message: 'Error adding log!' });
    console.log('Error adding log!'); 
  }
  else{
    res.status(201).json({ message: 'Log added successfully!' });
    console.log(req.body.level); 
    console.log(req.body.message); 
  }
}

module.exports = postLog;