integer = int(input("Enter an integer (2 or greater):"))
prime_numbers=[]
prime=0
print(f"The prime factors of {integer} are:")
while integer > 1:
    prime=2
    while integer%prime!=0:
        prime+=1
    else:
        prime_numbers.append(prime)
    integer=integer/prime
else:
    print(*prime_numbers, sep = "\n")
