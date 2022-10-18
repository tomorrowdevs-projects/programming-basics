#dog-years
#this program converts the human years entered by the user into dog years

human_years = int(input("Enter the human years: "))
while human_years < 0:
    print ("Error! Negative values not allowed")
    human_years = int(input("Enter the human years: "))
if 0 <= human_years <= 1:
    dog_years = 10.5 * human_years
elif human_years == 2:
    dog_years = 21
else:
     dog_years = 21 + 4*(human_years - 2)

print (human_years, "human years are", dog_years, "dog years.")
   