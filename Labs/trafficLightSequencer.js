const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles){
  if (!config.phases || config.phases.length === 0){
    console.log("No phases found");
    return;
  }
  if (config.fault === true){
    console.log("Faulted phase!");
    return;
  }

  for (let c = 0; c < cycles; c++){
    for (const phase of config.phases){
      if (phase.duration <= 0){
        console.log("Invalid phase detected");
      } else {
        console.log(`Switching to ${phase.color} for ${phase.duration} s`);
        
      }
    }
  }
}

function generateTimeline(config, cycles){
  let result = [];
  let runningTotal = 0;
  for (let c = 0; c<cycles; c++){
    for (const phase of config.phases){
      result.push(runningTotal+=phase.duration);
    }
  }
  
  return result;
}

// runSequence(config1, 1);
// runSequence(config1, 2);
//runSequence(config2, 1)
//runSequence(config3, 2)
//runSequence(config4, 5)
// console.log(generateTimeline(config1, 1));
// console.log(generateTimeline(config1, 2));
// console.log(generateTimeline(config2, 2));
// console.log(generateTimeline(config3, 1));
// console.log(generateTimeline(config4, 1));
