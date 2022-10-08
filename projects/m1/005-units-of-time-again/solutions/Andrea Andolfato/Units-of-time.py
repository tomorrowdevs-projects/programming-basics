
# Calcolo delle variabili day-hour-min, dato il totala dei secondi:

total sec = int(input('Enter the number of seconds'))

day = int(input(total_sec // 86400))
hour = int(input(total_sec // 3600))
min = int(input(total_sec // 3600) % 60)

# Inserire il risultato precedente nella forma D:HH:MM:SS

print(f'{day}:{hour.zfill(2)}:{min.zfill(2)}:{sec.zfill(2)}')