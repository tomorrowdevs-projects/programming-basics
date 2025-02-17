    let insValue = prompt("Insert a coordinate (a1, b2...), I'll tell'you if it is Black or White").toLowerCase();

    let chooseL = insValue.slice(0,1);
    let chooseN = insValue.slice(1,2);
    
    switch (chooseL){
        case "a":
        case "c":
        case "e":
        case "g":
            if (chooseN % 2 == 0 ){
                alert("The color of the choosen square is WHITE");
            } else {
                alert("The color of the choosen square is BLACK");
            }
        break;

        case "b":
        case "d":
        case "f":
        case "h":
            if (chooseN % 2 == 0 ){
                alert("The color of the choosen square is BLACK");
            } else {
                alert("The color of the choosen square is WHITE");
            }
        break;

    }
    