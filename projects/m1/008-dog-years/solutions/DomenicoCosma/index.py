
age = int(input('How old are you?'))

first_ages = 21

if age >= 0 and age <= 2:
    print(f'Your dog age is {age*10.5}') 
elif age > 2:
    print(f'Your dog age is {first_ages+4*(age-2)}')  #Calcolo aggiunta 4 anni dopo i primi 2 anni
else:                                                 #Se l'user inserisce un numero negativo
    print('Error:Write a positive number!!!')