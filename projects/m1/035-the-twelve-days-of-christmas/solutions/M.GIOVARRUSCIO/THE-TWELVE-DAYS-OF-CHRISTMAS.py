"""
The Twelve Days of Christmas is a repetitive song that describes an increasingly
long list of gifts sent to one’s true love on each of 12 days.
A single gift is sent on the first day.
A new gift is added to the collection on each additional day,
and then the complete collection is sent.
The first three verses of the song are shown below.
The complete lyrics are available on the Internet.

*On the first day of Christmas my true love sent to me:
A partridge in a pear tree.*

*On the second day of Christmas my true love sent to me:
Two turtle doves,
And a partridge in a pear tree.*

*On the third day of Christmas my true love sent to me:
Three French hens,
Two turtle doves,
And a partridge in a pear tree.*

Write a program that displays the complete lyrics for The Twelve Days of Christmas.
Your program should include a function that displays one verse of the song.
It will take the verse number as its only parameter. Then your program should call this
function 12 times with integers that increase from 1 to 12.

Each item that is sent to the recipient in the song should only appear in your program once,
with the possible exception of the partridge.
It may appear twice if that helps you handle the difference between
“A partridge in a pear tree” in the first verse and
“And a partridge in a pear tree” in the subsequent verses.
You can even import your solution to Exercise 034 to help you complete this exercise.


"""

from modulo1 import inserisci
def verso(n):
    vers = ["A partridge in a pear tree", "Two turtle doves", "Three French hens",
            "Four calling birds","Five gold rings","Six geese a-laying",
            "Seven swans a-swimming", "Eight maids a-milking", "Nine ladies dancing",
            "Ten lords a-leaping", "Eleven pipers piping", "Twelve drummers drumming"]
    s1 = f"\n On the {inserisci(n)} day of Christmas my true love sent to me:"
    finale = f"\n A partridge in a pear tree."
    for i in range(n-1 , 0,-1):
        s1 += f"\n {vers[i]},"
    s1 += finale
    return s1

if __name__=="__main__":
    num=int(input("Inserisci un numero tra 1 e 12:"))
    print(verso(num))