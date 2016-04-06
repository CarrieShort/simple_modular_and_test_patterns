const chai = require('chai');
const expect = chai.expect;
const greetCli = require(__dirname + '/../bin/greeting');

describe('greeting', ()=>{
  before(()=>{
    this.process_backup = process.argv;
    process.argv = [null,null,'test'];
  });

  after(()=>{
    process.argv = this.process_backup;
  });

  it('should greet test',()=>{
    expect(greetCli()).to.eql('hello test');
  });

  describe('with no arguments', ()=>{
    before(()=>{
      process.argv = [];
    });

    it('should greet the world',()=>{
      expect(greetCli()).to.eql('hello world');
    });
  });
});
