const greeting = require(__dirname + '/lib/greeting.js');

console.log(greeting.greet(process.argv[2]));
