# UNITS OF TIME AGAIN

# read a number of seconds from the user. 
sec_user = int(input('Enter a number of seconds: '))

day = str(sec_user // 60 // 60 // 24)
hour = str((sec_user // 60 // 60) % 24) 
min = str((sec_user // 60) % 60)
sec = str(sec_user % 60)

# display the equivalent amount of time in the form D:HH:MM:SS
print(f'{day}:{hour.zfill(2)}:{min.zfill(2)}:{sec.zfill(2)}')