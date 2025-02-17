days = int(input ('Enter your days online: '))
hours = int(input('your hours: '))
minutes = int(input('your minutes: '))
seconds = int(input('your seconds: '))

if days >=0 and hours >= 0 and minutes >= 0 and seconds >= 0:
    convert_days = days * 86400
    convert_hours = hours * 3600
    convert_minutes = minutes * 60

    total_seconds = convert_days + convert_hours + convert_minutes + seconds
    print('Your total seconds online are ' + str(total_seconds) + 's')

else: 
    print("Error: entered incorrect data.")
    exit()