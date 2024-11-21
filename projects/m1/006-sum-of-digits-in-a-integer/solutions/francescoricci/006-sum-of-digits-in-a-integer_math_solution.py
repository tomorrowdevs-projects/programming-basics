#execise m1/006-sum-of-digits-in-a-integer by Francesco Ricci
# math solution

total_number =0
user_input =  int(input('insert number with minimum 4 digits: '))
number = int(user_input)

if number>999 and number<9999:

    message_sum = str(number // 1000)
    total_number += (number//1000)

    number = number - (number//1000*1000)
    message_sum = message_sum + '+' + str(number // 100)
    total_number += (number//100)

    number = number - (number//100*100)
    message_sum = message_sum + '+' + str(number // 10)
    total_number += (number//10)

    number = number - (number//10*10)
    message_sum = message_sum + '+' + str(number // 1)
    total_number += (number//1)

    print(message_sum + '=' + str(total_number))

else:
    print("Number not valid or not 4 digits!")