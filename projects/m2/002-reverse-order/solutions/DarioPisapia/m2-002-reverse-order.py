
numbers = []
while True:
    n = int(input("Digit your numbers (0 to stop): "))
    if n == 0:
        break
    else:
        numbers.append(n)

for n in sorted(numbers, reverse = True):
    print(n)
