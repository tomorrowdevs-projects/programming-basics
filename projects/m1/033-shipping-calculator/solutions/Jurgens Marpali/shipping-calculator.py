def express(items):
    cost = 10.99
    if items > 1:
        cost = 10.99 + (items -1) * 2.99
    return cost

def main():
    user_items = int(input("Hoe many items do you have to ship? "))
    total = express(user_items)
    print ("You have to ship", user_items, " item(s) your total is ", "%.2f" % total, "$")

main()