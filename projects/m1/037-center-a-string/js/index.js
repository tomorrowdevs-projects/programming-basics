
let w = 70;
let message = "Sempre caro mi fu questo ermo colle";
let messageArray = ["Sempre caro mi fu questo ermo colle", "Nel mezzo del cammin di nostra vita", "Lorem ipsum dolor sit amet"];
let spacesArray = [];
let spacesArrayTwo = [];


function centerFunc(message, w){
    if (message.length < w) {
        let spacesNumb =  (w - message.length) / 2;

        for (i = 0; i < spacesNumb; i++) {
            spacesArray.push(" ");
            spacesArrayTwo.push(" ");
        }

        alert(spacesArray.join("") + " " + message + " " + spacesArrayTwo.join(""));

    } else {
        alert(message);

    }
}

centerFunc(message, w);