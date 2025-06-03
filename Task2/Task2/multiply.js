function multiply(a, b) {
    return a * b;
  }
  
  function multiplyNumbers(x, y) {
    return multiply.apply(null, [x, y]);
  }
  

  let result = multiplyNumbers(5, 3);
  console.log(result); 
  