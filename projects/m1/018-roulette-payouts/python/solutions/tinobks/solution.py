from random import randint

x = randint(0, 37)
red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]

if x % 2 == 0:
    isodd = False
else:
    isodd = True

if x == 0:
    print("The spin resulted in 0...")
    print("Pay 0")
elif x == 37:
    print("The spin resulted in 00...")
    print("Pay 00")
else:
    print(("The spin resulted in {}...") .format(x))
    print(("Pay {}") .format(x))
    
    if x in red:
        print("Pay Red")    
    else:
        print("Pay Black")

    if isodd:
        print("Pay Odd")
    else:
        print("Pay Even")

    if x <= 18:
        print("Pay 1 to 18")
    else:
        print("Pay 19 to 36")



# if x in red and x <= 18:
#     if isodd:
#         print(("The spin resulted in {}...") .format(x))
#         print(("Pay {}") .format(x))
#         print("Pay Red")
#         print("Pay Odd")
#         print("Pay 1 to 18")
#     else:
#         print(("The spin resulted in {}...") .format(x))
#         print(("Pay {}") .format(x))
#         print("Pay Red")
#         print("Pay Even")
#         print("Pay 1 to 18")

# elif x in red and x > 18:
#     if isodd:
#         print(("The spin resulted in {}...") .format(x))
#         print(("Pay {}") .format(x))
#         print("Pay Red")
#         print("Pay Odd")
#         print("Pay 19 to 36")
#     else:
#         print(("The spin resulted in {}...") .format(x))
#         print(("Pay {}") .format(x))
#         print("Pay Red")
#         print("Pay Even")
#         print("Pay 19 to 36")



# else:
#     if x <= 18:
#         if isodd:
#             print(("The spin resulted in {}...") .format(x))
#             print(("Pay {}") .format(x))
#             print("Pay Black")
#             print("Pay Odd")
#             print("Pay 1 to 18")
#         else:
#             print(("The spin resulted in {}...") .format(x))
#             print(("Pay {}") .format(x))
#             print("Pay Black")
#             print("Pay Even")
#             print("Pay 1 to 18")
#     if x > 18:
#         if isodd:
#             print(("The spin resulted in {}...") .format(x))
#             print(("Pay {}") .format(x))
#             print("Pay Black")
#             print("Pay Odd")
#             print("Pay 19 to 36")
#         else:
#             print(("The spin resulted in {}...") .format(x))
#             print(("Pay {}") .format(x))
#             print("Pay Black")
#             print("Pay Even")
#             print("Pay 19 to 36")





