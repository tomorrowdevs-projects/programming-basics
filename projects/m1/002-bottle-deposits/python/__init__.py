size = input('How many liters is your drink container?\n')

#I create a block that replaces the comma with point and I removes the probability to enter other inputs
try:
    n = float(size.replace(",", "."))
except ValueError:
    print("Input non valido. Inserire un numero intero o decimale.")
    n = 0

refound = 0

if n > 1:
    refound += 0.25
elif n == 0:
    refound = 0
else:
    refound += 0.10

question = input('Do you have other drink containers?\n')

while question.lower() == 'yes':
    size = input('How many liters is your drink container?\n')

    try:
        n = float(size.replace(",", "."))
    except ValueError:
        print("Input non valido. Inserire un numero intero o decimale.")
        n = 0
    
    if n > 1:
        refound += 0.25
    elif n == 0:
        refound += 0    
    else:
        refound += 0.10
    question = input('Do you have other drink containers?\n')
else:
    print("{:.2f}".format(refound)) #2 decimal digits


