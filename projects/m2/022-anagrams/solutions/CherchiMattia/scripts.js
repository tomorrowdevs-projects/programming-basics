let userString1 = prompt('enter the first string').toUpperCase();
let userString2 = prompt('enter the second string').toUpperCase();




const chekAnagram = (s1, s2) => {

    let string_1 = s1.match(/([\w])/g);
    let string_2 = s2.match(/([\w])/g);

    return string_1.sort().join('') === string_2.sort().join('')

}


const result = chekAnagram(userString1, userString2);

const areAnagram = (bool) => {

    if (bool) {
        alert(`These two strings:\n ${userString1},\n ${userString2}\n are anagrams`)
    } else {
        alert(`These two strings:\n ${userString1},\n ${userString2}\n are not anagrams`)
    }
}

areAnagram(result)