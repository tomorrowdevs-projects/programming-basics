
# richiesta verso l'user di inserire(secondi, minuti, ore e giorni) trascorsi.
request_seconds = int(input('How many seconds it\'s been?'))
request_minutes = int(input('How many minutes it\'s been?'))
request_hours= int(input('How many hours it\'s been?'))
request_days= int(input('How many days it\'s been?'))

#calcolo di(minuti, ore e giorni) in secondi

seconds = request_seconds * 1
minutes = request_minutes * 60
hours = request_hours * 60 * 60
days = request_days * 24 * 60 * 60

total = seconds + minutes + hours + days
print('The total is : ' + str(total) + ' seconds')