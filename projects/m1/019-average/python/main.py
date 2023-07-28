number = ' '
counter = 0
result = ''

 
while number != 0:
    counter = counter + 1
    number = input('Type a number or 0 to end: ')
    if not number.isdigit():
        result = 'error, value is not a number'
        break
    number = int(number)
    if number == 0 and counter == 1:
        result = 'error, first value can\'t be 0'
        break
    elif number != 0 and counter == 1:
        result = number
    else:      
        result = result + number 

if isinstance(result, str):
    print(result)
else:
    counter = counter - 1
    result = result / counter
    print(result)
    


