// Code your solution in this file!
let scuberHq = 42;
function distanceFromHqInBlocks (distance) {

  return Math.abs(distance - scuberHq)
}


function distanceFromHqInFeet (distance) {
  return(Math.abs(distance-scuberHq) *264);
}


function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination-start)*264
}

function calculatesFarePrice(start, destination) {
  const feet = Math.abs(destination-start) * 264
  if (feet <= 400 ) 
  {return 0}
  else if (feet > 400 && feet <= 2000) {
    return (feet -400 ) * 0.02
  } else if (feet > 2000 && feet <= 2500) {
    return 25

  } else { 
    return 'cannot travel that far'}
}