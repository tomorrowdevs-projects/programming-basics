# Asking user for year's number
human_years = float(input("Enter human years: "))

# Checking for the correctness of the value, compute the conversion 
# and print the result
if 0 < human_years <= 2:
    dog_years = human_years * 10.5
    print(f"Your dog has : {dog_years} dog's year")

elif 2 < human_years <= 20 :   
    dog_years = ((human_years - 2) * 4) + ( 2 * 10.5 )
    print(f"Your dog has : {dog_years} dog's year")

else :  
    print("Year's number can't be negative, equal to 0 or more than 20")

