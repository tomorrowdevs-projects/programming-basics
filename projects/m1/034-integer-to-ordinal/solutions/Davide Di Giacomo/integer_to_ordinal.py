ordinal_numbers = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"]
def int_to_ord(number):
    if 1 <= number <= 12:
        print(f"Your ordinal number is: {(ordinal_numbers[number-1])}")
    else:
        print(" ")
        if __name__ == '__main__':
            main()
                
def main():
    for i in range (1, 13):
            print (f"{i} = {(ordinal_numbers[i-1])}") 
        
number = int(input("Insert a integer between 1 and 12: "))
int_to_ord(number)