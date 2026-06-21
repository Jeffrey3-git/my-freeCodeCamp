const sunrise = "☀️";
const sunset = "🌑";

function getDaytimeHours(latitude) {
  const daytime = 2*Math.round((12+(latitude/90)*12)/2);
  const nighttime = 24-daytime;
  const getRepresentation = sunset.repeat(nighttime/2) + sunrise.repeat(daytime) + sunset.repeat(nighttime/2);
  return getRepresentation;
}

console.log(getDaytimeHours(0));
console.log()
console.log(getDaytimeHours(90));
console.log()
console.log(getDaytimeHours(-90));
console.log()
console.log(getDaytimeHours(-33));
console.log()
console.log(getDaytimeHours(66.5));
console.log()
console.log(getDaytimeHours(40));
console.log()
console.log(getDaytimeHours(-50));
