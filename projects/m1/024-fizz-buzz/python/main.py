
for i in range(0,101):
    if i % 3 == 0 and i % 5 != 0:
        print(f"{i} fizz!")
    elif i % 3 != 0 and i % 5 == 0:
        print(f'{i} buzz')
    elif i % 5 == 0 and i % 5 == 0:
        print(f"{i} fizz! buzz!")
    else:
        print(i)

