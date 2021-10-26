iteration = 0
total = 0

while True:
    user_value = int(input("Insert value: "))
    
    if user_value != 0:
        iteration += 1
        total += user_value
        average = total / iteration
        continue
    
    elif user_value == 0 and iteration == 0:
        print("Enter a value grater then 0!")
        continue
    else:
        print(f"The average is: {average:.2f}")
        break


