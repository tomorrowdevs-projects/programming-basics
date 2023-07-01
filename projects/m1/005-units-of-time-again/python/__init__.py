#1° Develop a program that begins by reading a number of seconds from the user

tot_sec = int(input('Enter your seconds value:\n'))
tot_min = tot_sec // 60
tot_hours = tot_sec // 3600
tot_days = tot_sec // 86400

'''
2° Then your program should display the equivalent amount of time in the form D:HH:MM:SS
The hours, minutes and seconds should all be formatted so that they occupy exactly 2 digits.
'''
seconds = tot_sec % 60 
minutes = tot_min % 60 
hours = tot_hours % 24 
days = tot_days % 24

print(f'{"{:02d}".format(days)}:{"{:02d}".format(hours)}:{"{:02d}".format(minutes)}:{"{:02d}".format(seconds)}')