number=int(input("Please enter a number from 1 to 12: "))

def ordinal_number(number):
    
    position=["first","second","third","fourth","fifth","sixth","seventh","eight","ninth","tenth","eleventh","twelfth"]
    print(f"The position for {number} number is {position[number-1]}")
 
ordinal_number(number)