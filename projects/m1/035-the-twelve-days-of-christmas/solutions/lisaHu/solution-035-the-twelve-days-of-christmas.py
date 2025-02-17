def song(verse):
    #import partially code from previous exercise and insert the code's result to the introductive verse to change the (ordinal) day
    ordinal = ['First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Eighth', 'Ninth', 'Tenth', 'Eleventh', 'Twelfth']
    num = ordinal[verse -1]

    #create strings of each verse with \n to print on new line
    print('On the ' + num.lower() + ' day of Christmas, my true love sent to me')
    day1 = 'And a partridge in a pear tree \n'
    day2 = 'Two turtledoves \n'
    day3 = 'Three French hens \n'
    day4 = 'Four calling birds \n'
    day5 = 'Five gold rings (five golden rings) \n'
    day6 = 'Six geese a-laying \n'
    day7 = 'Seven swans a-swimming \n'
    day8 = 'Eight maids a-milking \n'
    day9 = 'Nine ladies dancing \n'
    day10 = 'Ten lords a-leaping \n'
    day11 = 'Eleven pipers piping \n'
    day12 = 'Twelve drummers drumming \n'

    #creation of empty var that will store the verses + add variables of verses in list
    order_verse = ''
    days = [day1, day2, day3, day4, day5, day6, day7, day8, day9, day10, day11, day12]

    #the loop in the else statement will add from the reversed list each verse in the range from 0 to integer from verse var
    #the \n added at the end of each verse/string will ensure that the verses will be printed on new lines every time
    #if it's just 1 verse, it will be printed specifically for this case
    if verse == 1:
        print('A partridge in a pear tree')
    else:
        for i in reversed(days[0:verse]):
            order_verse = order_verse + i
        print(order_verse)

#input of integer from user + call of function
verse = int(input('Enter which verse you want to display: '))
song(verse)