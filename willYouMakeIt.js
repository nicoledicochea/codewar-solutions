// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.


const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    // P: distance to pump, miles per gallon, gallons left
    // R: return true or false if pump can be reached
    // E:
      // zeroFuel(50, 25, 2), true
      // zeroFuel(100, 50, 1), false
    // P:
      // create variable milesCarCanGo
      // milesCarCanGo is miles per gallon x gallons left
      // subtract milesCarCanGo - distanceToPump
          // conditional: if remainder >= 0, true
          // else return false
    
    let milesCarCanGo = mpg * fuelLeft
    if (milesCarCanGo - distanceToPump >= 0) {
      return true
    } else { 
      return false 
    }
}