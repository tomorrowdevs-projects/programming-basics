
days_31 = ['jan', 'mar', 'may', 'mul', 'aug', 'oct', 'dec']
day_30 = ['apr', 'jun', 'sep', 'nov']

request_month = input('Write your month...')

month = request_month.lower() 

if month[0:3] in days_31:                   #Anche se l'utente inserisca il mese completo l'IDE leggerà solo le prime 3 lettere
    print('Your month has 31 days')
elif month == 'feb':
    print('Your month has usually 28 days but every 4 years has 29 days')
elif month[0:3] in day_30:
    print('Your month has 30 days')
else:
    print('Error: This is not a month!!')