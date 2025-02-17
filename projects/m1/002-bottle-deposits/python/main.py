value_small = 0.10
value_big = 0.25


print("How many small cans do you have?")
number_small = int(input())

print("How many big cans do you have?")
number_big = int(input())
      
refund = number_small*value_small + number_big*value_big
print("Your refund is: " + str(round(refund , 2)) + "$") # ALTERNATIVE print("Your refund is: " + "%.2f" % refund + "$")