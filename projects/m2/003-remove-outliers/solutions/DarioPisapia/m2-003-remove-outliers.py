
def cut(number_list, n):
    new_list = sorted(number_list)
    return new_list[n:-n]

if __name__ == "__main__":
    n = int(input("How many extreme values do you want remove?:\n"))
    number_list = input("Enter at least one integer more than double of your parameter, separated by comma:\n").split(",")

    number_list = [int(n) for n in number_list]
    
    if len(number_list) > n * 2 and n > 0:
        print(f"\nThe new list is: {cut(number_list, n)}\nThe original list was: {number_list}")
    elif n < 0:
        print("You entered a negative integers as parameter")
    else:
        print("You entered less than required numbers")
