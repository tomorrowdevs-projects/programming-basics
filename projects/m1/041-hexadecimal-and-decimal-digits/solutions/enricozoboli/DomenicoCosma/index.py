

#Function hex2int converts the hexadecimal in a decimal number
#Function int2hex converts the decimal number in a hexadecimal

try:
 def hex2int(hex):
      decimal = int(hex, 16)                                                           #convert the hexadecimal into an integer
      if len(hex) > 1:
          print('You cannot enter more then one letter or a number greater then 9')
      else:
          print(f'The decimal of "{hex}" is: {decimal}')


 hex2int(input('Enter a number from 0 to 9 or a letter from a to f to convert it in a decimal number...'))


 def int2hex(int):
    if int > 15:
        print('You cannot enter a number greater then 15')
    else:
        hexadecimal = hex(int)                                                          #convert the integer to a hexadecimal
        print(f'The hexadecimal of "{int}" is : {hexadecimal[2:3].upper()}')

 int2hex(int(input('Enter a number from 0 to 15 to convert it in a hexadecimal...')))

except:
    print('You have to enter a letter from a to f')