#main program that uses your recursive function to convert a non-negative integer entered by the user from decimal to binary. 
#should display an appropriate error message if the user enters a negative value.

transform_binary=[]
def binary(number):
    
    if number>=2:
        binary_1=number%2
        #append to list the rest division
        transform_binary.append(str(binary_1))
        number=int(number//2)
        #recursive
        binary(number)
    #if input is 0 or 1 append to list
    elif number==0 or number==1: 
        transform_binary.append(str(number))
    #reversed list to have the result    
    binary_list=(list(reversed(transform_binary)))
    return "".join(binary_list)

def main(number):
    #error message if the user enters a negative value.
    if number<0: print("Error! Your number is negative!")
    else:
        print(f"Your decimal number in binary system is: {binary(number)}")
    
number=int(input("Insert a positive number to convert in binary: "))
main(number) 