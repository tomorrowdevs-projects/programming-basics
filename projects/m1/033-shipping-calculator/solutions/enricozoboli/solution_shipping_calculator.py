def shipping_calculator(num_items):
    if num_items <= 0:
        return "Shipping charge: €0"
    else:
        shipping_charge = 10.95 + ((num_items -1) * 2.95)
        return f"Shipping charge: €{shipping_charge:.2f}"

def main():
    print(shipping_calculator(1))
    print(shipping_calculator(2))
    print(shipping_calculator(234))
    print(shipping_calculator(0))

if __name__ == "__main__":
    main()