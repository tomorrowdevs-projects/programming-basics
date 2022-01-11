days_user = int(input('Insert a number of days: '))
hours_user = int(input('Insert a number of hours: '))
minutes_user = int(input('Insert a number of minutes: '))
second_user =int(input('insert a number of seconds'))
total_seconds=(days_user * days_user) + (hours_user * 3600) + (minutes_user * 60) + second_user
print(f'Total seconds are : {total_seconds}')