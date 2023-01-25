integer_number = int(input("Please insert a four-digits number "))

string_number = str(integer_number)

if len(string_number) != 4:
    print("Please you have to insert a number with four digits.")
else:
    sum_of_digits = int(string_number[0]) + int(string_number[1]) + int(string_number[2]) + int(string_number[3])
    print("The digits sum of the number ",string_number,"is ",sum_of_digits)

