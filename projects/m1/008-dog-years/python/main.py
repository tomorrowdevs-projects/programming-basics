#take human year as input
human_age = int(input("Insert your age and I'll transform it in a Dog's age: "))
error_message = "Error: the value is not valid, use only a 1+ value for the age"
print(error_message * (human_age <= 0))

#The above condition catch if the input is less than 1 and generate an error

#inizialize variable for the 1 year 
first_year = 10.5   
#inizialize variable for the 2 year 
second_year = 21   
#inizialize a variable that contains only the age 3+ witouth the first 2
three_more_year_witouth_first_two = (4 * human_age) 
#create the total variable that cover 3+ year 
three_more_year = second_year + three_more_year_witouth_first_two
#I used an if,elif, else statements to perform differents scenarios
if human_age == 1:
    print(f"Your dog's age is {first_year}")

elif human_age ==2:
    print(f"Your dog's age is {second_year}")

else:
    print(f"Your dog's age is {three_more_year}")
    