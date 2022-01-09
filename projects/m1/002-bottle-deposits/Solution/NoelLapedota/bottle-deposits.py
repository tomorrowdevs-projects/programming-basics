size_s = int(input("Enter the number of small containers, less than or equal to 1 liter"))
size_b = int(input("Enter the number of large containers, greater than 1 liter"))

if size_b and size_s != 0 :
    print("There is nothing for you! sorry")
           
tot = size_s + size_b
refund = (size_s * 0.10) + (size_b * 0.25)
print("Full refound $ {.2f},for a total of bottles n.{}".format(refund,tot))
