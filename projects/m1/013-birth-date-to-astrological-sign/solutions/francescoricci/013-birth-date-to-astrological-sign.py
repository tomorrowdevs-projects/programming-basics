# Creare un funzione che passando i due parametri letti restituisce il segno zodiacale.
# refactoring nomi variabili e messaggi output

def getZodiacalName(birth_month_name,birt_day):
    #body function
    # print('mounth ' + str(birth_month_name))
    # print('day ' + str(birt_day))
    if birth_month_name == 12:
        zodical_sign = 'Saggitarius' if birt_day < 21 else 'Capricorn'
    elif birth_month_name == 1:
        zodical_sign = 'Capricorn' if birt_day < 19 else 'Acquarius'
    elif birth_month_name == 2:
        zodical_sign = 'Acquarius' if birt_day < 18 else 'Pisces'
    elif birth_month_name == 3:
        zodical_sign = 'Pisces' if birt_day < 20 else 'Aries'
    elif birth_month_name == 4:
        zodical_sign = 'Aries' if birt_day < 19 else 'Taurus'
    elif birth_month_name == 5:
        zodical_sign = 'Taurus' if birt_day < 20 else 'Gemini'
    elif birth_month_name == 6:
        zodical_sign = 'Gemini' if birt_day < 20 else 'Cancer'
    elif birth_month_name == 7:
        zodical_sign = 'Cancer' if birt_day < 22 else 'Lon'
    elif birth_month_name == 8:
        zodical_sign = 'Lon' if birt_day < 22 else 'Virgo'
    elif birth_month_name == 9:
        zodical_sign = 'Virgo' if birt_day < 22 else 'Libra'
    elif birth_month_name == 10:
        zodical_sign = 'Libra' if birt_day < 22 else 'Scorpio'
    elif birth_month_name == 11:
        zodical_sign = 'Scorpio' if birt_day < 21 else 'Saggitarius'
    else:
        zodical_sign = '<sign_not_valid>'

    return zodical_sign

#input body
user_input = input("Entered your birthday's mounth and day: ")
# extract two parameter by user_input space split
user_input = user_input.split()
month_name = int(user_input[0])
day = int(user_input[1])

#output message body
message = getZodiacalName(month_name,day)
print('\nYour Zodiac Sign is ' + message + '!')
