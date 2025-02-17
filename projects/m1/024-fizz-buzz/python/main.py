result = ''

for i in range(1,101):
    if i % 3 == 0 and i % 5 == 0:
        result = result + f"{i} fizz! buzz!\n"
    elif i % 3 == 0:
        result = result + f'{i} fizz!\n'
    elif i % 5 == 0:
        result = result + f"{i} buzz! \n"
    else:
        result = result + f'{i} \n'

print(result)
