const something = function() {
  let i=0;
  const things = [];

  while(i < 3) {
    things.push(function() { return i});
    i++;
  }

  return things;
}

const manyThings = something();
console.log(manyThings.reduce(function(x,y) { return x + y()}, 0));

const t = function(n) {
  return function(x) {
   if(n===0) return 5; x(); 
   return t(n-1)(x);
  }
}

const do5Times = t(5)
do5Times(function(n) { console.log("cool"); })