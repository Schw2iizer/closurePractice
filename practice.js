//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

var inner = outer();

//Once you do that, invoke inner.

inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  return function (number){
    return 'Calling ' + friend + ' at ' + number;
  }
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.
var iAmTheMan = callFriend();

iAmTheMan("435-215-9248");


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  var makeCounter = function(num){
    var counter = 0
    return function (){
      counter = counter + 1;
        return counter;
    }
  }


  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem



/*
  Write a function that accepts another function as it's only argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

var mac = function(fn){
  return function (){
    fn();
  };
};









