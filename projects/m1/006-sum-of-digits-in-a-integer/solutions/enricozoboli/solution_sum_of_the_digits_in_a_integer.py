number = int(input("Ahoy, pirate! Insert your number: "))

# Extract every digit from the integer
first_digit = number // 1000
second_digit = (number % 1000) // 100
third_digit = ((number % 1000) % 100) // 10
fourth_digit = (((number % 1000) % 100) % 10 )

# Calculate the sum
sum_of_number_digit = first_digit + second_digit + third_digit + fourth_digit

print(f"Your sum is : {sum_of_number_digit}.")