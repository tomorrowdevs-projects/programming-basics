#Write a program that reads values from the user until a blank line is entered.
#Display the total of all of the values entered by the user (0.0 if the first line is a blank line)

#recursive function
def values():
    number=input("Insert a value. Insert a blank line to stop: ")
    #if the first line is a blank line return 0
    if number=="": 
        return 0
    else: #add input number to the total by recursive function
        total=int(number)+values()
        return total
    
        
def main():          
    print (f"Your values are: {values()}")
    
main()