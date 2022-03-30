let insertLetter = prompt("Insert a letter, I'll tell you if it's a Vowel or a Consonant!!").toUpperCase();
    switch (insertLetter) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
        alert("This is a Vowel!!")
        break;
        case "Y":
        alert("Sometimes is a Vowel, Others a Consonant!!")
        break;
        default:
        alert("This is a Consonant!!");
    }
    