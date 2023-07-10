// declaration of integer variables
let cordinate_First_X;
let cordinate_First_Y;
let cordinate_Next_X;
let cordinate_Next_Y;
let cordinate_Previous_X;
let cordinate_Previous_Y;
let side_Polygon = 0;
let perimeter_Polygon = 0;
// declaration of variables of type String
let result_Perimeter_Polygon = "";
// insertion of the first stitch of the string X
cordinate_First_X = parseInt(prompt("Insert first coordinate X --> "));
// insertion of the first point of the Y coordinate
cordinate_First_Y = parseInt(prompt("Insert first coordinate Y --> "));

cordinate_Previous_X = cordinate_First_X;
cordinate_Previous_Y = cordinate_First_Y;

do {
    // insertion of the first point of the Y coordinate
    cordinate_Next_X = parseInt(prompt("Insert the next X coordinate (blank to exit). --> "));
    // if condition to exit when user enters a blank line
    if (isNaN(cordinate_Next_X)) {
        break;
    }
    // insertion of the second stitch of the Y co-ordinate
    cordinate_Next_Y = parseInt(prompt("Insert the next Y coordinate --> "));
    // calculate theastanza from the previous point to the next point --> single side polygon length
    side_Polygon = Math.sqrt(((cordinate_Previous_X - cordinate_Next_X) ** 2) + ((cordinate_Previous_Y - cordinate_Next_Y) ** 2));
    // calculate the perimeter of the polygon
    perimeter_Polygon = perimeter_Polygon + side_Polygon;

    cordinate_Previous_X = cordinate_Next_X;
    cordinate_Previous_Y = cordinate_Next_Y;

} while (isNaN());
// calculate theastanza from the previous point to the first point --> single side polygon length
side_Polygon = Math.sqrt((cordinate_Previous_X - cordinate_First_X) ** 2 + (cordinate_Previous_Y - cordinate_First_Y) ** 2);
// calculate the perimeter of the polygon
perimeter_Polygon = perimeter_Polygon + side_Polygon;
// variable where to enter the result message of the polygon perimeter
result_Perimeter_Polygon = `The perimeter of the polygon is: --> ${perimeter_Polygon}`;
// polygon perimeter result messages
console.log("\n" + result_Perimeter_Polygon + "\n");