#execise m1/006-sum-of-digits-in-a-integer by Francesco Ricci
# string solution

user_input =  int(input('insert number with minimum 4 digits: '))
string_number = user_input

number1 = str(string_number)[0:1]
number2 = str(string_number)[1:2]
number3 = str(string_number)[2:3]
number4 = str(string_number)[3:4]


total_str_number = int(number1) + int(number2) + int(number3) + int(number4)
print(str(number1) + '+' + str(number2) + '+' + str(number3) + '+' + str(number4) + '=' + str(total_str_number) )





