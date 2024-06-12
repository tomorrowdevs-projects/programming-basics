#The Twelve Days of Christmas is a repetitive song that describes an increasingly long list of gifts sent to one’s true love on each of 12 days. A single gift is sent on the first day. A new gift is added to the collection on each additional day, and then the complete collection is sent. The first three verses of the song are shown below. The complete lyrics are available on the Internet.On the first day of Christmas my true love sent to me: A partridge in a pear tree.On the second day of Christmas my true love sent to me: Two turtle doves, And a partridge in a pear tree.On the third day of Christmas my true love sent to me: Three French hens, Two turtle doves, And a partridge in a pear tree.Write a program that displays the complete lyrics for The Twelve Days of Christ- mas. Your program should include a function that displays one verse of the song. It will take the verse number as its only parameter. Then your program should call this function 12 times with integers that increase from 1 to 12.Each item that is sent to the recipient in the song should only appear in your program once, with the possible exception of the partridge. It may appear twice if that helps you handle the difference between “A partridge in a pear tree” in the first verse and “And a partridge in a pear tree” in the subsequent verses. You can even import your solution to Exercise 034 to help you complete this exercise.

def displaySong(integer):
  
  arrGifts= ["A partridge in a pear tree","turtle doves","French hens","calling birds","golden rings"," geese a-laying","swans a-swimming","maids a-milking","ladies dancing","lords a-leaping","pipers piping","drummers drumming"]
  arrNumbers=["first","second","third","fourth","fifth","sixth","seventh","eighth","ninth", "tenth","eleventh","twelfth"]
  return f"On the {arrNumbers[integer-1]} day my true love sent to me: {arrGifts[integer-1]}"
  
number=0
for x in range(12):
  number=number+1
  print(displaySong(number))

