
request_seconds = int(input('How many seconds in total it\'s been?'))

#trasformazione dei giorni come in un orologio e trasformazione da int a str
calc_days = request_seconds // 60 // 60 // 24
days = str(calc_days)


#traformazione delle ore come in un orologio e trasformazione da int a str
calc_hours = request_seconds // 60 // 60 % 24
hours = str(calc_hours)


#traformazione dei minuti come in un orologio e trasformazione da int a str
calc_minutes = request_seconds // 60 % 60
minutes = str(calc_minutes)


#traformazione dei secondi come in un orologio e trasformazione da int a str
calc_seconds = request_seconds % 60
seconds = str(calc_seconds)



print(f'{days.zfill(2)};{hours.zfill(2)};{minutes.zfill(2)};{seconds.zfill(2)}')