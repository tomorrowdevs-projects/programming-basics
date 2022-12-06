

function enterInput () {

    let string = prompt()

    if (string !== "") {
        enterInput();
    }


    
}

enterInput();
