// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).


// P: day
// each day costs 40
// after 7 or more days -50 from total
// after 3 or more -20 from total
// R: total cost
// E: rentalCarCost(3), 100
// rentalCarCost(4), 140
// rentalCarCost(5), 180
// rentalCarCost(6), 220
// P: create variable total cost
// total = 40 times days
// conditional for discounts

function rentalCarCost(d) {
    let total = d * 40
    if (d >= 7) {
      total -= 50
    } else if (d >= 3) {
      total -= 20
    } else {
      return total
    }
    
    return total
}