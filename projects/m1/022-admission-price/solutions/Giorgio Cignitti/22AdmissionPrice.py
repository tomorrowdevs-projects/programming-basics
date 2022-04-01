#A particular zoo determines the price of admission based on the age of the guest. Guests 2 years of age and less are admitted without charge. Children between 3 and 12 years of age cost $14.00. Seniors aged 65 years and over cost $18.00. Admission for all other guests is $23.00. Create a program that begins by reading the ages of all of the guests in a group from the user, with one age entered on each line. The user will enter a blank line to indicate that there are no more guests in the group. Then your program should display the admission cost for the group with an appropriate message. The cost should be displayed using two decimal places.


#global variable to keep trace of guests
guests = []

#reduce custom function 
def reduceFunc(arr):
  summa=0
  for x in arr:
    summa=summa+x
  return summa

#function calculating the price for each guest
def calcPrice(age):
  price=23

  if (age<=2):
   price

  elif(age>=3 and age <=12):
   price+=14

  else:
    price+=18

  return price
  
#function calculating the total 
def printBill(arr):
  totalBill=reduceFunc(arr)
  return  f"the total price is {totalBill:.2f} euro"

while True:
    guestAge = input("insert an age (blank line to): ")
    if guestAge:
        guests.append(int(guestAge))
    else:
        break 

#map to map over the guest array applyin for each of them the calcPrice function
result=map(calcPrice , guests)

print(printBill(result))


