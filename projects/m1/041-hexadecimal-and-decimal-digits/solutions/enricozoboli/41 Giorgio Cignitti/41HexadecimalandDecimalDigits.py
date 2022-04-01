#Write two functions, hex2int and int2hex, that convert between hexadecimal digits (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E and F) and decimal (base 10) integers. The hex2int function is responsible for converting a string containing a single hexadecimal digit to a base 10 integer, while the int2hex function is responsible for converting an integer between 0 and 15 to a single hexadecimal digit. Each function will take the value to convert as its only parameter and return the converted value as its only result. Ensure that the hex2int function works correctly for both uppercase and lowercase letters. Your functions should display a meaningful error message and end the program if the parameter’s value is outside of the expected range.

def hex2int(string):
  stringUp=string.upper()
  arrDec=["10","11","12","13","14","15","16"]
  output=""
  if(stringUp=="A"):
    output=int(arrDec[0])
  elif(stringUp=="B"):
    output=int(arrDec[1])
  elif(stringUp=="B"):
    output=int(arrDec[2])
  elif(stringUp=="C"):
    output=int(arrDec[3])
  elif(stringUp=="D"):
    output=int(arrDec[4])
  elif(stringUp=="E"):
    output=int(arrDec[5])
  elif(stringUp=="F"):
    output=int(arrDec[6])
  elif(stringUp == "0" or stringUp == "1" or stringUp=="2" or stringUp=="3" or stringUp=="4" or stringUp=="5" or stringUp=="6" or stringUp=="7" or stringUp=="8" or stringUp=="9"):
    output=int(stringUp)
  else:
    output="input out of range"
  return output

def int2hex(string):
  stringUp=string.upper()
  output=""
  if(stringUp=="10"):
    output="A"
  elif(stringUp=="11"):
    output="B"
  elif(stringUp=="12"):
    output="C"
  elif(stringUp=="13"):
    output="D"
  elif(stringUp=="14"):
    output="E"
  elif(stringUp=="15"):
    output="F"
  elif(stringUp=="16"):
    output="G"
  elif(stringUp == "1" or stringUp=="2" or stringUp=="3" or stringUp=="4" or stringUp=="5" or stringUp=="6" or stringUp=="7" or stringUp=="8" or stringUp=="9"):
    output=int(stringUp)
  else:
    output="input out of range" 
  return output


def main():
 whichConversion=input("Choose your conversion (write int to perform int-->hex conversion or hex to perform hex-->int conversion): ")
 if(whichConversion=="int"):
     userInput=input("insert your value(accepeted values: 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16): ")
     print(int2hex(userInput))
 elif(whichConversion=="hex"):
     userInput=input("insert your value(accepeted values: 0 1 2 3 4 5 6 7 8 9 A B C D E F G): ")
     print(hex2int(userInput))
 else:
   print("invalid input")

main()


