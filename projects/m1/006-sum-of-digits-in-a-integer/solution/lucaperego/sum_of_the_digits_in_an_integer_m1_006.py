#Sum of the Digits in an Integer

   

integer_string = input("Insert the Number [Integer] ---> ")

result = 0
digit_position = 0
symbol_string = " "

for el in integer_string: #it is also possible to use "while" - and the repetition of the operations %10 and /10 - treating the integer als a normal number INT

    if digit_position < len(integer_string)-1: #escluding the last Digit

        symbol_string += str(el) + " + " #creating symbol (+)

    else:
        symbol_string += str(el) + " = " #creating symbol (=) with the last digit
   
    digit_position += 1 #increasing the position of the digit
    result += int(el) #creating the sum*s elements: that is also a trick - normaly we use a += 1, in order to obtain an increment (+1), but here "el" is the increment! That is the key of the exercise.
    
    
symbol_string += str(result) #the result is treated as a str in order to link the symbols (+) and (=) ---> I had to surf on internet to find it!!! it si similar to the other trick (result += int(el)), but not really the same

print(f"The Result is:", result, "--->", (symbol_string))
    





#Alternative with WHILE --->

#integer = int(input("Insert a Number [Integer] ---> "))

#outcome=0

#while(integer>0):
    
    #digit = integer%10
    #outcome = outcome + digit
    #integer = integer//10
    
    
    
#print("Outcome:", {format(outcome, ".0f")})
    
  




  

