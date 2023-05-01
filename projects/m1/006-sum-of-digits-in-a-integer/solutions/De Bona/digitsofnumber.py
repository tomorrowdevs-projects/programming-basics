# reads a four-digit integer from the user and displays the sum of its digits.
num=input( "inserisci un numero intero di 4 cifre ")

sum=0
x= num[0]
y= num[1]
z= num[2]
w= num[3]

for n in num:
    sum+= int(n)


    print("the sum of digit is", sum)