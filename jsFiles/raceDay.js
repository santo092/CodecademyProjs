let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
let runnersAge = 18;

if (registeredEarly && runnersAge > 18){
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly){
  console.log(`${raceNumber}, your race starts at 9:30 am.`);
}
else if (runnersAge > 18 && !registeredEarly){
  console.log(`${raceNumber}, your race starts at 11:00 am`);
}

if(runnersAge < 18){
  console.log(`${raceNumber}, your race starts at 12:30 pm.`)
}
else {
  console.log(`Please see the registration desk.`)
}