#An online retailer provides express shipping for many of its items at a rate of €10.99 for the first item in an order, and €2.99 for each subsequent item in the same order. Write a function that takes the number of items in the order as its only parameter. Return the shipping charge for the order as the function’s result. Include a main program that reads the number of items purchased from the user and displays the shipping charge.


def calcFares(items):
  return f"{(items*2.99)+10.99}"

ItemsInput=int(input("how many items did you get?: "))
print(calcFares(ItemsInput))
