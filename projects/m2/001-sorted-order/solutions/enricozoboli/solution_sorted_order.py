numbers = []

while True:
    num = input("Enter a number(0 for exit): ")
    if num == '0':
        break
    else:
        numbers.append(num)

print(sorted(numbers))
    

