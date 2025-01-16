function XO(str) {
    let X = [];
    let O = [];
  
  for (let i of str) {
    if (i === "x"){
        X.push(i);
    } else {
    O.push(i);
  }}
  return X.length === O.length
}

// we had to finish cllasswork 
