#Consider the software that runs on a self-checkout machine. 
#One task that it must be able to perform is to determine how much change to provide when the shopper pays for a purchase with cash.
#Write a program that begins by reading a number of cents from the user as an integer. 
#Then your program should compute and display the denominations of the coins that should be used to give that amount of change to the shopper. 
#The change should be given using as few coins as possible. Assume that the machine is loaded with pennies, nickels, dimes, quarters, loonies and toonies.


centesimi=int(input("quanti centesimi di resto: "))
m1 = 1
m2 = 2
m3 = 10
m4 = 20
m5 = 50
conto1= int(centesimi / m5)
print("numero monete 0.50 cent: ", conto1) 
resto1= int(centesimi % m5)
        
conto2= int(resto1 / m4)
print("numero monete 0.20 cent: ",conto2)
resto2= int(resto1 % m4)
        
conto3= int(resto2 / m3)
print("numero monete 0.10 cent: ",conto3)
resto3= int(resto2  %  m3)
    
conto4= int(resto3 / m2)
print("numero monete 0.02 cent: ",conto4)
resto4= int(resto3 % m2)
    
conto5= int(resto4 / m1)
print("numero monete 0.01 cent: ",conto5)
resto5= int(resto4 % m1)
    
print("monete totali: ",conto1+conto2+conto3+conto4+conto5)         
    