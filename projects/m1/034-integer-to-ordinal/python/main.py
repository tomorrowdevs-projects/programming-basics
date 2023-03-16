def ordinal_number(number):
    if number == 1:
        return "1st"
    if number == 2:
        return "2nd"
    if number == 3:
        return "3rd"
    if number in [4, 5, 6, 7, 8, 9, 10, 11, 12]:
        return str(number) + "th"
  
        
if __name__ == "__main__":
    number = int(input("Enter a number from 1 to 12: "))
    ordinal_numbers = ordinal_number(number)
    
    if number == 0 or number >= 13:
        print ("")
    else:
        print(f'Your {number} means that you are the {ordinal_numbers}')