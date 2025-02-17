num = input("enter a four digits number\n")
if len(num) == 4:
    results = (int(num[0]) + int(num[1]) + int(num[2]) + int(num[3]))
    print ("the results is:", results)
elif len(num) < 4:
    print("the number has less digits than required\n" + "required: 4\n" + "number digits:", len(num))
elif len(num) > 4:
    print("the number has more digits than required\n" + "required: 4\n" + "number digits:", len(num))