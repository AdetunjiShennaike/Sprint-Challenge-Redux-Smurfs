//import the env
require('dotenv').config();

//set server
const server = require('./server');

//set port as dynamic
const PORT = process.env.PORT || 4500

server.listen(PORT, () => {
  console.log('\n Up and Running \n');
})