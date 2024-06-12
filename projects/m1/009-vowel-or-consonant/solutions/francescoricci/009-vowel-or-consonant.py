# m1/009-vowel-or-consonant by Francesco Ricci
# refactoring nomi variabili e messaggi output

lettera_alfabeto = str(input("Enter a alphabet letter! ").lower())

if lettera_alfabeto == 'a' or lettera_alfabeto == 'e' or lettera_alfabeto == 'i' or lettera_alfabeto == 'o' or lettera_alfabeto == 'u':
    print('The alphabet letter ' + lettera_alfabeto + ' is a vowel')
elif lettera_alfabeto == 'y' :
    print('The alphabet letter  ' + lettera_alfabeto + ' is sometimes a vowel or a consonant')
else:
    print('The alphabet letter  ' + lettera_alfabeto + ' is a consonant')











