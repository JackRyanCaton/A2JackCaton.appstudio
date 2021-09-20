// declare variables
let firstName = prompt("Enter your first name.")
let stateAbrev = prompt("Enter your state (NE or FL).")
let userTemp = prompt("Enter the current temperature (in Fahrenheit).")

// declare array
let messages = ["wear a warm coat, hat, scarf and gloves.", "wear a warm coat but you won't need a hat, scarf or gloves.", "wear your warmest coat, a warm hat, a scarf, and warm gloves.", "wear a warm coat, hat and gloves. Maybe a scarf too."]

// If/Else statements to get correct message according to inputs
if (stateAbrev = "NE" && userTemp < 32)
  console.log(`${firstName}, ${messages[0]}`)
else if (stateAbrev = "NE" && userTemp >= 32 && userTemp <= 50)
  console.log(`${firstName}, ${messages[1]}`)
else if (stateAbrev = "FL" && userTemp >= 32 && userTemp <= 50)
  console.log(`${firstName}, ${messages[2]}`)
else if (stateAbrev = "FL" && userTemp > 50 && userTemp <= 70)
  console.log(`${firstName}, ${messages[3]}`)





