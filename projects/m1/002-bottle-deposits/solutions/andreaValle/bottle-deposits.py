# wellcoming the user
print("Wellcome user. In this program you can calculate the amount of money you will get back when returning containers.")

# reading the number of containers of smaller size from the user
small_containers=input("Please insert the number of containers that hold one liter or less (type 0 if you don't have any):\n")
if not small_containers.isnumeric():
    print("Your have insert not a number. I will assume you have no little containers to give back.")
    small_containers=0
else: # i convert to int the input
    small_containers=int(small_containers)   
    
#testing if the user has at least one small container
if small_containers>0:
   deposit=small_containers*0.10
elif small_containers < 0:
    small_containers=0
    print('You have insert a negative number. I will assume you have no little containers to give back.')

# reading the number of containers of bigger size from the user
big_containers=input("Please insert the number of containers that hold more than one liter (type 0 if you don't have any):\n")
if not big_containers.isnumeric():
    print("Your have insert not a number. I will assume you have no big containers to give back.")
    big_containers=0
else: # i convert to int the input
    big_containers=int(big_containers)  

#testing if the user has at least one big container
#deposit of big containers is addes to the deposit of smaller ones, if any
if big_containers>0:
    deposit=big_containers*0.25
elif big_containers < 0:
    big_containers=0
    print('You have insert a negative number. I will assume you have no big containers to give back.')


# now i calculate the deposit the user has to receive, 
# if the sum is positive (at least one container is possesed, small or big) i print it
if small_containers>0 or big_containers>0:
    deposit=small_containers*0.10+big_containers*0.25
    print("Your total deposit is %.2f" % deposit, "$")
else:
    print("You have no containers to give back!")


# scheme:
#1) i need to ask for input of the small deposits;
#   1.1) i should check if the user prompts a valid input. A valid input is a integer, non-negative numeber. 
#           Can be zero if the user has no deposit of the given size to give back.  
#   1.2) the check is divided up into two step: first i check if it is a number. Secondly, if it is positive.  
#2) the process is repeated another time for the big deposits.
#3) finally i print the result that is the sum of the deposits of both small and big containers.