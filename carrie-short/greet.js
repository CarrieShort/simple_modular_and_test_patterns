'use strict';
const Greeting = require(__dirname + '/lib/greeting.js');

console.log(new Greeting(process.argv[2]).greet());
