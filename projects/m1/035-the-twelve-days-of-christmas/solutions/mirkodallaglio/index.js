function twelveDaySong (verse){

let numOrdinary = ['On the day of Christmas, my true love sent to me','first ','second ','third ','fourth ','fifth ','sixth ','seventh ','eighth ','ninth ','tenth ','eleventh ','twelfth '];

let gifts = ['And a partridge in a pear tree','Two turtledoves','Three French hens','Four calling birds','Five gold rings (five golden rings)',
            'Six geese a-laying','Seven swans a-swimming','Eight maids a-milking','Nine ladies dancing','Ten lords a-leaping','Eleven pipers piping',
            'Twelve drummers drumming'];
let verseString = [numOrdinary[0].slice(0, 7), numOrdinary[verse], numOrdinary[0].slice(7)].join('') + '\n';

for(i = verse -1; i >= 0; i--){
    if(verse === 1) verseString += 'A' + gifts[0].slice(5) + '\n';
    else verseString += gifts[i] + '\n';
}
return verseString;
};

for(e = 1; e <= 12; e++){
    console.log(twelveDaySong(e) + '\n');
};

// lyrics of the song taken from the internet


/*On the first day of Christmas, my true love sent to me
A partridge in a pear tree

On the second day of Christmas, my true love sent to me
Two turtledoves
And a partridge in a pear tree

On the third day of Christmas, my true love sent to me
Three French hens
Two turtledoves
And a partridge in a pear tree

On the fourth day of Christmas, my true love sent to me
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the fifth day of Christmas, my true love sent to me
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the sixth day of Christmas, my true love sent to me
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the seventh day of Christmas, my true love sent to me
Seven swans a-swimming
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the eighth day of Christmas, my true love sent to me
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the ninth day of Christmas, my true love sent to me
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the tenth day of Christmas, my true love sent to me
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the eleventh day of Christmas, my true love sent to me
I sent eleven pipers piping
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree

On the twelfth day of Christmas, my true love sent to me
Twelve drummers drumming
Eleven pipers piping
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five gold rings (five golden rings)
Four calling birds
Three French hens
Two turtledoves
And a partridge in a pear tree */