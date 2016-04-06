#!/usr/bin/env node
const Greeting = require(__dirname + '/../lib/greeting');

var greetCli = module.exports = function() {
  return new Greeting(process.argv[2]).greet();
};

process.stdout.write(greetCli() + '\n');
