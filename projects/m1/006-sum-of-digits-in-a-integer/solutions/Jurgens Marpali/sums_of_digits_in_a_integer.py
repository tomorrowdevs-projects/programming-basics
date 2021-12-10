# Sum of the Digits in an Integer

#Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
#For example, if the user enters 3141 then your program should display 3+1+4+1=9.

number = input('Please type a four digit number here:')


one = int(number[0])
two = int(number[1])
three = int(number[2])
four = int(number[3])

total = str(one + two + three + four)
print ("Your total is: " + str(one) + " + " + str(two) + " + " + str(three) + " + " + str(four) + "= " + str(total))