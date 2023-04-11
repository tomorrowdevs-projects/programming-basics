l1=int(input("Enter the number of containers holding one liter or less: "))
l2=int(input("Enter the number of containers holding more than one liter: "))
r=l1*0.10+l2*0.25
print(f"You'll get a refund of ${r:.2f}")