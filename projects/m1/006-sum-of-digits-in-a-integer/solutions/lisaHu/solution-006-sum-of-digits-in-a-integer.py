#Develop a program that reads a four-digit integer from the user and displays the sum of its digits. 
#For example, if the user enters 3141 then your program should display 3+1+4+1=9.




number = int(input("Enter a number of 4 digits:\n"))


#funzione per il calcolo delle cifre del numero
def getSum(number):
    sum = 0
    for digit in str(number): 
      sum += int(digit)      
    return sum

getSum(number)


#funzione per la verifica che il n. cifre sia giusto (Se sbagliato, darà un messaggio d'errore)
def verifyDigits(number):
    if len(number) > 4:
        print("Number of digits wrong.\nPlease, refresh and enter a number of 4 digits.")
    elif len(number) < 4:
        print("Number of digits wrong.\nPlease, refresh and enter a number of 4 digits.")
    else:
      print("The sum of the digits is: " + str(getSum(number)))

verifyDigits(number)