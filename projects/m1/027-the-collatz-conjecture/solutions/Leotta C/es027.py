def sequence(n):
    list = [n]
    while n != 1:
        if n % 2 == 0:
            n = n // 2
        else:
            n = n*3 + 1
        list.append(n)

    return list


n = int(input("Enter a positive number: "))
while n > 0 :
    print(sequence(n))
    n = int(input("Enter a positive number: "))
print("The end")