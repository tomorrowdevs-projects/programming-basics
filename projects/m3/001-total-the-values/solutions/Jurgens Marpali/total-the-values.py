def totalSum():
    user = input("Insert a number or enter to finish:")
    if user == '':
        return 0
    else:
        return totalSum() + int(user)

def main():
    print(totalSum())

if __name__ == "__main__":
    main()
