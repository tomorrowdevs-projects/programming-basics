#Write a program that reads values from the user until a blank line is entered.
#Display the total of all of the values entered by the user (0.0 if the first line is a blank line)

total=[]
#recursive function
def values():
    number=input("Insert a value. Insert a blank line to stop: ")
    #if the first line is a blank line
    if number=="" and total==[]: 
        total.append("0.0") 
        return total
    #blank line to stop
    elif number=="": return total
    else:
        total.append(str(number))
        #recursive
        values()
  
values()
print (f"Your values are: {', '.join(total)}")