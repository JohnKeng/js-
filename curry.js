function curry(func , fixedParams){
  if ( !Array.isArray(fixedParams) ) { fixedParams = [ ] }
  return function(){
      let newParams = Array.prototype.slice.call(arguments); 
      if ( (fixedParams.length+newParams.length) < func.length ) {
          return curry(func , fixedParams.concat(newParams));
      }else{
          return func.apply(undefined, fixedParams.concat(newParams));
      }
  };
}


var abc = function(a, b, c) {
  return [a, b, c];
};

var curried = curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

curried(1)(2,3);
// => [1, 2, 3]
