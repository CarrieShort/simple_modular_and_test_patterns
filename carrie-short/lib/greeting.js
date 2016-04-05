const Greeting = module.exports = function(name){
  this.name = name;
  this.greet = function(){
    return 'hello ' + name;
  }
}
