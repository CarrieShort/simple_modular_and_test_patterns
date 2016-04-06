const chai = require('chai');
const expect = chai.expect;
const Greeting = require(__dirname + '/../lib/greeting.js');

process.argv[2] = 'Jake';
const inputUser = process.argv[2];
debugger;
const greeting = new Greeting(inputUser);

describe('greeting', ()=>{
  it('should have a name',()=>{
    expect(greeting.name).to.eql(inputUser);
  });
  it('should greet the name with a friendly hello',()=>{
    expect(greeting.greet()).to.eql('hello ' + inputUser);
  });
});
