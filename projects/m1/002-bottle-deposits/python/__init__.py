#Write a program that reads the number of containers of each size from the user.
size = input('How many litres?\n')

#I put a lock to remove the possibility that the user doesn't use the numbers or uses the comma
try:
    n = float(size.replace(",", "."))
except ValueError:
    print("Invalid input. Enter a decimal number.")
    n = 0

refound = 0

if n > 1:
    refound = 0.25
elif n == 0:
    refound += 0 #I add zero if the user inputs wrong
else:
    refound += 0.10

#Your program should continue by computing and displaying the refund that will be received for returning those containers.
question = input(f'Here your refund is ${"{:.2f}".format(refound)}. \
Do you have other drink containers? (please use yes or no)\n')

#I create a loop that allows the user to continue add others drink containers.
while question.lower() == 'yes':
    size = input('How many litres?\n')
    try:
        n = float(size.replace(",", "."))
    except ValueError:
        print("Invalid input. Enter a decimal number.")
        n = 0
    if n > 1:
        refound += 0.25
    elif n == 0:
        refound += 0
    else:
        refound += 0.10
    question = input(f'Here your refund is ${"{:.2f}".format(refound)}. \
Do you have other drink containers? (please use yes or no)\n')
else:
    x = "{:.2f}".format(refound)
    print(f"Here your refund is ${x}")