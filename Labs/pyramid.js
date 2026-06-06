function pyramid(char,num,bool){
  let loop = 0;
  let space = " ";
  let pyramid = "";
  if (!bool){
    while (loop < num){
      let pattern = space.repeat(num-loop-1)+char.repeat(2*loop+1);
      loop++;
      pyramid+= pattern+"\n"
    }
  } else if(bool){
    let holder = num;
    while (loop < num){
      let pattern = space.repeat(loop)+char.repeat(holder*2-1);
      holder--;
      loop++;
      pyramid+= pattern + "\n";
    }
  }
  return "\n"+pyramid;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("o", 4, true));
console.log(pyramid("p", 5, true));

