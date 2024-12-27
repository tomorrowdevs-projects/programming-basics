year = int(input('Enter year number:')) * 31536000
month = int(input('Enter month number:')) * 2592000
days = int(input('Enter days number:')) * 86400
hour = int(input('Enter hour number:')) * 3600
minute = int(input('Enter minute number:')) * 60
seconds = int(input('Enter seconds number:'))

total_second = seconds + minute + hour + days + month + year
print(f'The total number of seconds corresponding to your date is: {total_second} seconds')