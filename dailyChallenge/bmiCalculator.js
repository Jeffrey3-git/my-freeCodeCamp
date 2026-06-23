function calculateBmi(weight, height) {
  const bmi = (weight/height**2)*703;
  return bmi.toFixed(1);
}


console.log(calculateBmi(180, 70));
console.log(calculateBmi(140, 64));
console.log(calculateBmi(160, 76));
console.log(calculateBmi(200, 60));
console.log(calculateBmi(150, 68));
