# In many jurisdictions a small deposit is added to drink containers to encourage people to recycle them. In one particular jurisdiction, drink containers holding one liter or less have a $0.10 deposit, and drink containers holding more than one liter have a $0.25 deposit. 
# Write a program that reads the number of containers of each size from the user. Your program should continue by computing and displaying the refund that will be received for returning those containers. 
# Format the output so that it includes a dollar sign and two digits to the right of the decimal point.


#inizializzo il contatore
Ammount_money=0
#eseguo il set dell'input
Size_bottle=float(input("dimension_bottle: "))
#faccio i controlli tramite if ed else
if  Size_bottle > 1:
    Ammount_money= Ammount_money + 0.25
else:
     Ammount_money= Ammount_money + 0.10

#stampo l'ammontare della tassa     
print("Ammount_Deposit: ",Ammount_money)    
