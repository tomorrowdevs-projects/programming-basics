
// i declare my only global variable, the string that will be "cleaned".
let string = "*Contractions.... sd,f include: don’t, isn’t, and wouldn’t.* then your function should return the list";



    function deletePunctuation (string) {

//here i create two regular expression, that i'll use later on my if statement.
        let punctuationRegex = /[~`’!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/;
        let letterRegex = /[a-z]/;


// i declare my array "chars", where i spli the string by single characters.
        let chars = string.split("");

// here i iterate an if statement on every characters in "chars", where i match the RegEx with the char and it's previous/next to decide if it needs to be deleted.
        for (i = 0; i <= chars.length; i++){

            if ( (punctuationRegex.test(chars[i])) ) {
                    if ((letterRegex.test(chars[i + 1]) === true) && (letterRegex.test(chars[i - 1]) === true)) {
                        chars[i] = chars[i];
            } else {
                chars[i] = "";
            }
        }}    

    alert(chars.join(" "));

    }


deletePunctuation(string);