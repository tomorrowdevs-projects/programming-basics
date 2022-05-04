
def isSublist(larger, smaller):
    larger = [str(i) for i in larger ]
    larger = "".join(larger)
    smaller = [str(i) for i in smaller ]
    smaller = "".join(smaller)
    if smaller in larger:
        return True
    else:
        return False

if __name__ == "__main__":
    lst1 = input("Digit here the elements of your firs list separated by whitespace: ").split(" ")
    lst2 = input("Digit here the elements of your second list separated by whitespace: ").split(" ")
    if lst1 >= lst2:
        larger = lst1
        smaller = lst2
    else:
        larger = lst2
        smaller = lst1
    print(isSublist(larger, smaller))
