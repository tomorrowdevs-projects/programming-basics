let insYear = prompt("Insert your year, I'll tell you if it is Leap or NOT");

    if (insYear % 400 == 0 ){
        alert("This is a Leap Year!!");
    } else if (insYear % 400 != 0 && insYear % 100 == 0 ){
        alert("This is NOT a Leap Year!!");
    } else if (insYear % 100 != 0 && insYear % 4 == 0){
        alert("This is a Leap Year!!");
    } else {
        alert("This is NOT a Leap Year!!")
    }
