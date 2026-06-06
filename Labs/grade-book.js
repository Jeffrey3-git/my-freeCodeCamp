function getAverage(scores){
  let length = scores.length;
  let sum = 0;
  for (let i = 0; i<length; i++){
    sum += scores[i];
  }
  return sum/length;
}
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));


function getGrade(score){
  switch (true){
    case score===100:
    return "A+";
    case score >= 90:
    return "A";
    case score >= 80:
    return "B";
    case score >= 70:
    return "C";
    case score >= 60:
    return "D";
    default:
    return "F"
  }
}
console.log(getGrade(63));


const hasPassingGrade = score => getGrade(score) != "F";
console.log(hasPassingGrade(30));

const studentMsg = (scores,studentScore) => hasPassingGrade(studentScore) ? `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You passed the course.` : `Class average: ${getAverage(scores)}. Your grade: ${getGrade(studentScore)}. You failed the course.`

console.log();
console.log("___Final Result___")
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 35));
