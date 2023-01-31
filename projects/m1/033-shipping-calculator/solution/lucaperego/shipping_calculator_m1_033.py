

def shipping_charge(items_number):
    if items_number <= 0:
        return 0
    elif items_number == 1:
        return 10.99
    else:
        return round((10.99 + (items_number -1)*2.95), 2)
    
def main():
    items_number = int(input("Insert the Number of Items: "))
    print("Shipping charge for {items_number} items: ", shipping_charge(items_number))
            
if __name__ == '__main__':
    main()