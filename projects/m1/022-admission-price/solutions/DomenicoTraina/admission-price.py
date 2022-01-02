guest_age=[]
guest_price=[]

while True:
    age=input("Enter guest's age: ")
    guest_age.append(age)
    if age == " ":
        guest_age.pop(len(guest_age)-1)
        break
    elif    0 < int(age) <= 2:  
        guest_price.append(0)
    elif  2 < int(age) <= 12:  
        guest_price.append(14)
    elif  int(age) >= 65:
        guest_price.append(18)
    else:
        guest_price.append(23)

for index in range (len(guest_age)):
        print("Guest {} Age: {} must pay {} $".format(index+1,guest_age[index], guest_price[index]))
total_price=sum(guest_price)
print(f"Total Price is: {total_price:.2f} $")