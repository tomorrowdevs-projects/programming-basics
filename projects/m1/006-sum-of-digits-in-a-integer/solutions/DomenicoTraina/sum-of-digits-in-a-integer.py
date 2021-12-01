
number= int (input ("Please enter a 4 digit number: "))

number_string = str(number)
digit1=int(number_string[0])
digit2=int(number_string[1])
digit3=int(number_string[2])
digit4=int(number_string[3])

sum_of_digits=digit1+digit2+digit3+digit4
print(sum_of_digits)