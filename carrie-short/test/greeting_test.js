const chai = require('chai');
const expect = chai.expect;
const greeting = require(__dirname + '/../lib/greeting.js');

process.argv[2] = 'Jake';
const inputUser = process.argv[2];

describe('greeting', () => {
  it('should greet the name with a friendly hello', () => {
    expect(greeting.greet(inputUser)).to.eql('hello ' + inputUser);
  });
});
