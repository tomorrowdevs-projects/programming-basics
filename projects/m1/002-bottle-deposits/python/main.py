# ask to user number of containers
recycled_big =float(input('How many bottles that hold one liter or less do you have? '))
recycled_little =float(input('how many bottles that hold more than a liter do you have? '))
# calculate refund 
big = recycled_big * 0.25
little = recycled_little * 0.10
total = round(big + little, 2)
# print refund to video
print("if you will refund this containers you'll get " + str(total) +" $")
