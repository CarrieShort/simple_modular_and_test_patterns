const chai = require('chai');
const expect = chai.expect;
const Greeting = require(__dirname + '/../lib/greeting.js');

const greeting = new Greeting('Jake');

describe('greeting', ()=>{
  it('should have a name',()=>{
    expect(greeting.name).to.eql('Jake');
  });
  it('should greet the name with a friendly hello');
});
