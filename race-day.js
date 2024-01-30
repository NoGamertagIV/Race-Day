let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let age = 17;

if (registeredEarly && age > 18) {
raceNumber <= 1000;
}
if ( registeredEarly && age > 18) {
  console.log(`Your race is at 9:30, your race number is: ${raceNumber}.`)
}else if(!registeredEarly && age > 18) {
  console.log(`Your race is at 11:00, your race number is: ${raceNumber}.`)
}else if(age < 18) {
  console.log(`Your race is at 12:30, your race number is: ${raceNumber}.`)
}else if(age = 18) {
  console.log('Please see the registration desk.')
}
