# esercizio m1/005-unit-of-time-again by Francesco Ricci
# esempio conversione da secondi a dd:hh:mm:ss
# refactoring nomi variabili e messaggi output

separate_section = '-'*20
format_two_number = "%02d"

second_total = int(input('Enter number second total: '))

# see header total second
print("\nTotal second: " + str(second_total))
residue_time_in_second = second_total
print(separate_section)

# calculate total day with int division and calculate
second_total_in_day =  residue_time_in_second // 86400
residue_time_in_second = second_total % 86400

# calculate total hour with int division and calculate
second_total_in_hour =  residue_time_in_second // 3600
residue_time_in_second = second_total % 3600

# calculate total minutes with int division and calculate
second_total_in_minutes =  residue_time_in_second // 60
residue_time_in_second = second_total % 60

second_total_in_day =       str(format_two_number % second_total_in_day)
second_total_in_hour    =   str(format_two_number % second_total_in_hour)
second_total_in_minutes =   str(format_two_number % second_total_in_minutes)
residue_time_in_second  =   str(format_two_number % residue_time_in_second)

# see second's conversion in DD:HH:MM:SS format
print('DD:HH:MM:SS')
print( second_total_in_day + ':' + str(second_total_in_hour) + ':' + str(second_total_in_minutes) + ':' + str(residue_time_in_second))

