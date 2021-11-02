lst = list(range(1, 101))

for i in lst:
    if i % 3 == 0 and not i % 5 == 0:
        print(f"{i} fizz!")
    elif i % 5 == 0 and i / 5 < i / 3:
        print(f"{i} buzz!")
    else:
        print(i)