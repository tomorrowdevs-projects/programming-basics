print("Hi, welcome to the J Zoo Toronto! We hope that you have fun")
#two years = $0.00
#three-twelve = $14.00
#sixtyfive = $18.00
#adult = $23.00
cost = 0
while True:
    ages = input("Please Write your age here (enter a blank space when you're finished): ")

    if ages == " ":
        break
    
    if 3 <= int(ages) <= 12:
        cost += 14.00
    
    if 13 <= int(ages) <=64:
        cost += 23.00
    
    if 65 <= int(ages) <=101:
        cost += 18.00
print("Your Groups total is: ", "%.2f" % cost)
print("Welcome to the ZOO!!")

