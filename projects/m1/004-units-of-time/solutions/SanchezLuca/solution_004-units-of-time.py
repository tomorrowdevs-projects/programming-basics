print('Hello!!! Here you can calculate the number of seconds by entering the number of days, hours, minutes and seconds.\n')
print('Please insert below the number of days, hours, minutes and seconds as integer. ')
#faccio inserire all'utente il numero di giorni, ore, minuti, secondi
days = int(input('Days--> ' ))
hours = int(input('Hours--> '))
minutes = int(input('Minutes--> '))
seconds = int(input('Seconds--> '))
#calcolo il numero di secondi per ogni input dato dall'utente
sec1 = int(days * 86400)
sec2 = int(hours * 3600)
sec3 = int(minutes * 60)
sec4 = int(seconds)
print('Total number of seconds--> ',sec1 + sec2 + sec3 + sec4)

