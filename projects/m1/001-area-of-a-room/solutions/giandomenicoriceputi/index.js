const height = parseFloat(prompt("Write the height in CM ?"))
const length = parseFloat(prompt("Write the length in CM ?"))

typeof(height) && typeof(length) === "string" ? parseFloat(prompt("Write a number ?")) : null

alert(`This is your area: ${height * length} CM ` )
