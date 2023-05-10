# Vowels
#input letter
letter=0

letter=input("Inserisci una lettera")

#Determinare se vocale o consonante
if letter =='a' or letter =='e' or letter =='i' or letter =='o' or letter =='u':
    print("Hai inserito una vocale")
elif letter=="y":
    print("Some time y è a vowel and some time y is a consonant")
else: print("hai inserito una consonante")
