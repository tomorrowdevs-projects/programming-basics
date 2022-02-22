def reduce(quantity, parameter):
    if parameter == "cup":
        print(f"The quantity to use is: {quantity} cups.")
    elif parameter == "tablespoon":
        if quantity < 16:
            print(f"The quantity to use is: {quantity} tablespoon.")
        else:
            print(f"The quantity to use is: {quantity//16} cups, {quantity%16} tablespoon.")
    elif parameter == "teaspoon":
        if quantity < 3:
            print(f"The quantity to use is: {quantity} teaspoon.")
        else:
            if quantity < 48:
                print(f"The quantity to use is: {quantity//3} teablespoon, {(quantity%3)} teapoon.")
            else:
                if quantity%16 < 3:
                    print(f"The quantity to use is: {(quantity//48)} cups, {(quantity%48)} teaspoon.")
                else:
                    print(f"The quantity to use is: {(quantity//48)} cups, {((quantity%48)//3)} tablespoon, {((quantity%48)%3)} teaspoon.")

quantity=int(input("Insert the quantity of your ingredient: "))
parameter=str(input("Insert the parameter of your quantity (cups, tablespoon, teaspoon): "))
reduce(quantity, parameter)