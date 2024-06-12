# refactoring nomi variabili e messaggi output

#primi due anni  canini 10 anni e 6 mesi umani
#secondo anno 21 anni
#terzo anno = due anni (21 umani)  + 4
#quarto anno 21 + 4 + 4

def verify_input_year():
    #controllare il tipo inserito
    #input_anni = input('Inserire anni canini')
    import re
    ripeti = True

    while True:
        user_input = input("Enter dog years ")
        num_format = re.compile(r'^\-?[1-9][0-9]*$')
        isInteger = re.match(num_format, user_input)
        if not isInteger:
            print('Insert int number,value not valid! ')
        else:
            return int(user_input)
            break


total_dog_years =  (verify_input_year())
#totale_anni_canini = input('Inserire anni canini')

print('OK number valid!')

#arrotonda per difetto
total_humans_years = 0
if (total_dog_years >= 1 and  total_dog_years <3):
    total_humans_years = int(10.5 * total_dog_years)
elif (total_dog_years > 2):
    age_puppy_dog = 2
    age_dog= total_dog_years - 2
    total_humans_years = int(10.5 * age_puppy_dog)
    total_humans_years += int(4 * age_dog)

#controllare input con una funzionericorsiva per controllare che il numero non sia ne negativo e ne eccessivo

#totale_anni_umani = ?
print('\nYour dog is ' + str(total_humans_years) + ' human years old')
