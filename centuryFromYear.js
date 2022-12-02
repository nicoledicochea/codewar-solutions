// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.



/*
    P: a year
    R: the century
    E: century(1705) --> 18
        century(1900) --> 19
        century(1601) --> 17
        century(2000) --> 20
    P: switch case but then would need to write for every single case
        use math.floor and math.round?
        create variable yearRounded = Math.floor(year / 100)
        conditional
*/

function century(year) {
    const yearRounded = Math.floor(year/100)
    if (year > yearRounded * 100) {
      return yearRounded + 1
    } else {
      return yearRounded
    }
}