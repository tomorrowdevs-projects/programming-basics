const string1 = "evil"
const string2 = "live"
const string3 = "hello"
const string4 = "world"

function anagrams(s1,s2){
    const count = [];
    for(i=0; i<s1.length;i++){
        count.push(s1[i])
        
    }
    for(n=0;n<s2.length;n++){
        if (count.includes(s2[n])){
            return `The words ${s1} and ${s2} are anagrams`
        }else{
            return `The words ${s1} and ${s2} are't anagrams`
        }
    }
    return count
}

console.log(anagrams(string1,string2))
console.log(anagrams(string3,string4))