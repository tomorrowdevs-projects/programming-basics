from random import randint
n = 0
i = 1
count = 0

while i <= 100:
    number = int(randint(1,100))
    if number > n:
        maximum = number
        print(f"{maximum}  <- Update")
        count = count + 1
    else:
        print(number)
    i = i + 1
    n = maximum

print(f"The maximum value found is {maximum} \n"
      f"The maximum value was updated {count} times.")

