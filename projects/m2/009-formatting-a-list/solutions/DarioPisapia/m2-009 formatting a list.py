
def formatting(lst):
    first = ",".join(lst[:-1])
    if len(lst) > 1:
        return f"{first} and{str(lst[-1])}"  
    else:
        return str(lst[0])



if __name__ == "__main__":
    lst = input("Enter all the needed words to list, separated by comma:\n").split(",")
    print(formatting(lst))
