"""
A particular zoo determines the price of admission based on the age of the guest.
Guests 2 years of age and less are admitted without charge.
Children between 3 and 12 years of age cost $14.00. Seniors aged 65 years and over cost $18.00.
Admission for all other guests is $23.00.
Create a program that begins by reading the ages of all of the guests in a group from the user,
with one age entered on each line.
The user will enter a blank line to indicate that there are no more guests in the group.
Then your program should display the admission cost for the group with an appropriate message.
The cost should be displayed using two decimal places.
"""
lista=[]
eta=input("Inserisci eta:")
while eta!="":
    lista.append(eta)
    eta = input("Inserisci eta:")
sum=0
for eta in lista:
    eta=int(eta)
    if eta<=2:
        sum+=0
    elif eta<12:
        sum+=14
    elif eta>=65:
        sum+=18
    else:
        sum+=23
print(sum)