const chai = require('chai');
const expect = chai.expect;
const Greeting = require(__dirname + '/../lib/greeting.js');

const name = 'Jake'
const greeting = new Greeting(name);

describe('greeting', ()=>{
  it('should have a name',()=>{
    expect(greeting.name).to.eql(name);
  });
  it('should greet the name with a friendly hello',()=>{
    expect(greeting.greet()).to.eql('hello ' + name);
  });
});
