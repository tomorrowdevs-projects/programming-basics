def formatting_list(string):
    li = string.split()
    second_li = []
    second_li.append(li[len(li) - 1])
    second_li.append("and")
    li.pop(len(li) - 1)
    n_list = ", ".join(li)
    new_list_2 = " ".join(second_li)
    return n_list + " " + new_list_2

def main():
    user = input("Enter your list: ")
    print(formatting_list(user))

if __name__ in "__main__":
    main()