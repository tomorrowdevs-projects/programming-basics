# The Twelve Days of Christmas is a repetitive song that describes an increasingly long list of gifts sent to one’s true love
# on each of 12 days. A single gift is sent on the first day.
# A new gift is added to the collection on each additional day, and then the complete collection is sent.
# The first three verses of the song are shown below. The complete lyrics are available on the Internet.

# On the first day of Christmas my true love sent to me: A partridge in a pear tree.

# On the second day of Christmas my true love sent to me: Two turtle doves, And a partridge in a pear tree.

# On the third day of Christmas my true love sent to me: Three French hens, Two turtle doves, And a partridge in a pear tree.

# Write a program that displays the complete lyrics for The Twelve Days of Christ- mas.
# Your program should include a function that displays one verse of the song.
# It will take the verse number as its only parameter.
# Then your program should call this function 12 times with integers that increase from 1 to 12.

# Each item that is sent to the recipient in the song should only appear in your program once,
# with the possible exception of the partridge.
# It may appear twice if that helps you handle the difference between “A partridge in a pear tree” in the first verse and
# “And a partridge in a pear tree” in the subsequent verses.
# You can even import your solution to Exercise 034 to help you complete this exercise.7

print("\nEnter the verse number")
verse = int(input())
gifts = ["A song for the Christmas tree", "Two candy canes", "Three boughs of holly", "Four colored lights", "A shining star", "Little silver bells", "Candles a-glowing", "Gold and silver tinsel", "A guardian angel", "Some mistletoe", "Gifts for one and all", "All their good wishes"]


def verse1():
    ordinal_number = "first"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[0])

def verse2():
    ordinal_number = "second"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[1])
    print("And " + gifts[0])

def verse3():
    ordinal_number = "third"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse4():
    ordinal_number = "fourth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse5():
    ordinal_number = "fifth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse6():
    ordinal_number = "sixth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse7():
    ordinal_number = "seventh"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[6])
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse8():
    ordinal_number = "eighth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[7])
    print(gifts[6])
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse9():
    ordinal_number = "ninth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[8])
    print(gifts[7])
    print(gifts[6])
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse10():
    ordinal_number = "tenth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[9])
    print(gifts[8])
    print(gifts[7])
    print(gifts[6])
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse11():
    ordinal_number = "eleventh"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[10])
    print(gifts[9])
    print(gifts[8])
    print(gifts[7])
    print(gifts[6])
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

def verse12():
    ordinal_number = "twelfth"
    print("\nOn the " + ordinal_number + " day of Christmas my true love sent to me:")
    print(gifts[11])
    print(gifts[10])
    print(gifts[9])
    print(gifts[8])
    print(gifts[7])
    print(gifts[6])
    print(gifts[5])
    print(gifts[4])
    print(gifts[3])
    print(gifts[2])
    print(gifts[1])
    print("And " + gifts[0])

if verse == 1:
    verse1()
elif verse == 2:
    verse2()
elif verse == 3:
    verse3()
elif verse == 4:
    verse4()
elif verse == 5:
    verse5()
elif verse == 6:
    verse6()
elif verse == 7:
    verse7()
elif verse == 8:
    verse8()
elif verse == 9:
    verse9()
elif verse == 10:
    verse10()
elif verse == 11:
    verse11()
elif verse == 12:
    verse12()
else:
    ordinal_number = " "

print("\nAnd the entire song is...")
print("\n  ")


verse1()
verse2()
verse3()
verse4()
verse5()
verse6()
verse7()
verse8()
verse9()
verse10()
verse11()
verse12()