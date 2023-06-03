function pigLatin(s){
    if (/[bcdfghjklmnpqrstvwxys]/gi.test(s[0]) ){ 
        return s.replace(s[0],"") + s[0] + "ay";
    }else if (/[aeiou]/gi.test(s[0])){
        return s + "way";
    }

}


console.log(pigLatin("computer"));
console.log(pigLatin("algorithm"));
