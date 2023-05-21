my_dictionaries ={"C4": 261.63,"D4": 293.66,"E4": 329.63,"F4": 349.23,"G4": 392.00,"A4": 440.00,"B4":403.88}
q=(input('Write a note : ')).upper()

letter = q[0]
number =int(q[1])

my_dictionaries2 ={"C": 261.63,"D": 293.66,"E": 329.63,"F": 349.23,"G": 392.00,"A": 440.00,"B":403.88}
formula = my_dictionaries2[letter] / 2**(4 - number)

if q in my_dictionaries :
    a = (my_dictionaries[q])
    print("The frequency of your note is : {}Hz".format(a))

else :
     print("The frequency of your note is : {}Hz".format(formula))
     my_dictionaries.update({q:formula})
