# Develop a program that reads a four-digit integer from the user and displays the sum of its digits. For example, if the user enters 3141 then your program should display 3+1+4+1=9.


print("\nEnter the 5-digits number")
number = input()

number_one = int(number [0])
number_two = int(number [1])
number_three = int(number [2])
number_four = int(number [3])
number_five = int(number [4])
sum_number = int(number_one + number_two + number_three  + number_four + number_five)
print(str(number_one)+" + "+str(number_two)+" + " +str(number_three)+" + " +str(number_four)+" + " +str(number_five)+" = "+str(sum_number))
