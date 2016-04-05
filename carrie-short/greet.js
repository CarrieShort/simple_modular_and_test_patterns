'use strict';
const Greeting = require(__dirname + '/lib/greeting.js');

for (var i = 2; i < process.argv.length; i++){
  console.log(new Greeting(process.argv[i]).greet());
}
