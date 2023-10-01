seconds = int(input("Insert number of seconds: "))

days = seconds // 86400
seconds -= days * 86400

hours = seconds // 3600
seconds -= hours * 3600

minutes = seconds // 60
seconds -= minutes * 60

print(str(days) + ':' + str(f'{hours:0>2}') + ':' + str(f'{minutes:0>2}') + ':' + str(f'{seconds:0>2}'))