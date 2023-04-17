def shipping(item):
    if item >=2:
        price = 10.99 + (item - 1)*2.99
        return price
    return 10.99

if __name__ == '__main__':
    n = int(input("Enter the number of items: "))
    print(f"Shipping charge: {shipping(n)} €")
