#Solution for 001-total-the-values project

def GetValuesAndSum():
    val = input("Insert value: ")
    if val == "":
        return 0.0
    else:
        return float(val) + GetValuesAndSum()

def main():
    print("Insert your values' list, press enter to terminate and get the sum.")
    sum = GetValuesAndSum()
    print("The sum is ", sum)

if __name__ == "__main__":
    main()