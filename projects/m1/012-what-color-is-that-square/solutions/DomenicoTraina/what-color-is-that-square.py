column=("A","B","C","D","E","F","G")

user_column=input("Please enter column (A-H): ")
user_row=   int(input("Please enter column (1-8): "))
index=0
while index<8:
    if column[index]==user_column:
        if (((index+1+user_row)%2) != 0):
            print("The square of {}{} is WHITE ".format(user_column,user_row))
            break
        else:
            print("The square of {}{} is BLACK ".format(user_column,user_row))
            break
    else:
        index += 1