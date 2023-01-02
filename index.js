
function isPalindrome(word) {
  // (Write your algorithm here)
if (word.charAt() === word.slice(-1))
  return true
 else {
  return false 
  }
}

/* 
  (Add your pseudocode here)

Have function return specifed result under certain condition(s)
if argument meets condition,return result
if not return other result
*/

/*
  (Add written explanation of your solution here)
  creat function to see if string in parameters is a plaidrome by using if/else loop to return true or false depsing on argument
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
