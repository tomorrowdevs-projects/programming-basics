
let x = parseInt(prompt("Please, enter the first x coordinate of your polygon:"));
let y = parseInt(prompt("Please, enter the first y coordinate of your polygon:"));

let prevX = x;
let prevY = y;
let perimeter = 0;
let nextX = 0;
let nextY = 0;
let sideLength = 0;



while (nextX >= 0) {
    nextX = parseInt(prompt("Enter the nextX coordinate (leave empty to quit):"));

    if (nextX >= 0) {

        nextY = prompt("Enter the next y coordinate:");

        let sideLength = Math.sqrt(((nextX - prevX) ** 2) + ((nextY - prevY) ** 2));
        perimeter += sideLength;

        prevX = nextX;
        prevY = nextY;
        lastX = prevX;

    } else {
        break;

    }

}

sideLength = Math.sqrt(((lastX - x) ** 2) + ((nextY - y) ** 2));
        perimeter += sideLength;

alert("The perimeter of your polygon is " + perimeter.toFixed(2) + " cm!");
