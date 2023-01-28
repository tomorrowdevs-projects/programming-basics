

start = input("Hi!!! Do you like Fizz-Buzz? Press Enter to play ---> ")


free_numbers = list(range(101))


for n in free_numbers:
    
    if n % 3 == 0 and n % 5 != 0:
        print("FIZZ")
        
    elif n % 3 != 0 and n % 5 == 0:
        print("BUZZ")
        
    elif n % 3 == 0 and n % 5 == 0:
        print("FIZZ-BUZZ")
        
    else:
        print(n)
        