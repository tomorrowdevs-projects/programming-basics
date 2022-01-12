
number_items=int(input("Please enter number of items: "))

def cost_shipping (number_items):
    cost=10.99+number_items*2.99
    return cost

cost=cost_shipping(number_items)
print(f"Total Cost for {number_items} item is {cost} $")