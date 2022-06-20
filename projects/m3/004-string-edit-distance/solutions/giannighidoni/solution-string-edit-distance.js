let count = 0;

function stringEditDistance(s, t){
    if(s === t){
        return 0;
    } else {
        if(s[0] != t[0]){
            s[0] = t[0];
            count++;
            stringEditDistance(s.slice(1), t.slice(1));

        } else {
            stringEditDistance(s.slice(1), t.slice(1));
        }
        return count;
    }
}

console.log(stringEditDistance("kitten", "sitting")); 