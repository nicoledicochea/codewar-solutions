// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
    // 90 <= score <= 100	'A'
    // 80 <= score < 90	'B'
    // 70 <= score < 80	'C'
    // 60 <= score < 70	'D'
    // 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    // P: 3 integers (0 to 100)
    // R: letter grade for the average of 3 scores 
    // E: 
      // getGrade(95,90,93), 'A'
      // getGrade(70,70,70), 'C'
      // getGrade(58,62,70), 'D'
    // P: declare variable averageScore
    // averageScore equals (s1 + s2 + s3) / 3
    // coniditonal for numerical score > letter grade
    
    let averageScore = (s1 + s2 + s3) / 3
    if(averageScore >= 90 && averageScore <= 100) {
      return 'A'
    } else if(averageScore >= 80 && averageScore < 90) {
      return 'B'
    } else if(averageScore >= 70 && averageScore < 80) {
      return 'C'
    } else if(averageScore >= 60 && averageScore < 70) {
      return 'D'
    } else {
      return 'F'
    } 
}