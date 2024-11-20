let raceNumber = Math.floor(Math.random() * 1000);
 let isRunnerRegisteredEarly;
let runnersAge = 0;
let startTime = null;
let adultRegistration = isRunnerRegisteredEarly ? '9:30' : '11:00';
let youthRegistrationTime = '12:30 PM';


if( runnerAge > 18 && isRunnerRegisteredEarly){
  raceNumber += 1000;
  console.log('This is early adult Registration'+ raceNumber);
}
else if(runnerAge > 18 && !isRunnerRegisteredEarly){
  console.log('This is Late Adult Registration' + raceNumber);
}
else if(runnerAge < 18){
  console.log('This is youth Registration');
}