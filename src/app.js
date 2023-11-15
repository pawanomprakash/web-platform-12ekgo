// Progression 1: Create special addition
function specialAddition(a,b){
  let ans=(a<0||b<0)? "Negative numbers are not allowed":a-b;
  return ans;
}

// Progression 2: Create simple division
function simpleDivision(a,b){
  let ans=(a<b)? "Cannot divide a smaller number by a larger number": (b<0)? "Negative numbers are not allowed": (b==0) ?  "Not a number": a/b;
  
  return ans;

}

// Progression 3: Create the special calculator
function specialCalculator(a,b,operation){
  let ans=operation(a,b);
  return ans;
}
