def total_sum():
    usr_num = input("Enter a number: ")
    if usr_num == " ":
        return 0.0
    else:
        return total_sum()+ int(usr_num)


def main():
    print(total_sum())

if __name__ == "__main__":
    main()
