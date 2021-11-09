#conversione degli anni umani a quelli canini nei primi 2 anni
human_years = int(input('please enter human years: '))
while human_years <= 0:
    print('Error: in numero deve essere positivo!')
    human_years = int(input('please enter human years: '))
    if human_years > 0:
        break
def conversion (input):
    dog_years1 = 10.5
    dog_years2 = (input - 2) * 4
    if input <= 2 :
        print(str(input * dog_years1))
    else:
        print(str((dog_years1 * 2 ) + dog_years2))
conversion(human_years)

