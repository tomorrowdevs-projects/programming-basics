from builtins import input

day = int(input("Numero di giorni "))
hour = int(input("Ore "))
minute = int(input("minuti "))
second = int(input("secondi "))
tot_sec: int =day*86400+hour*3600+minute*60+second
print("Il numero di secondi è =", tot_sec)