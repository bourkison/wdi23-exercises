/*
  If you declare a "var" within a block (i.e. if statement, etc),
  you will still be able to access it outside of the block.

  However, a "let" has block scope, so therefore if you declare a
  variable with the let keyword within a block, you will not be able to
  access it outside of the block.

  This is also true for "const".
*/

var message = "hello"; // Global scope.

const showMessage = function()
{
  console.log(message);
}

showMessage();

//////////////////////////////////////////

const showLocalMessage = function()
{
  var otherMesesage = "Goodbye"; // Local sccope.
  console.log(otherMesesage);
}

showLoalMessage();
// console.log(otherMesesage); - will give us an error due to local scope.

/////////////////////////////////////////

// let - local block scope.

if ( 7 === 7 )
{
  var food = "hotdogs";
  console.log("within the block", food);
}

console.log("outside the block", food); // Will not give you an error despite being outside the block.

/////////////////////////////////////////

if (12 === 12)
{
  let secretPassword = "swordfish";
  console.log("within the block", secretPassword);
}

// console.log("within the block", secretPassword); WILL give you an error as we defined the variable with let.

///////////////////////////////////////
