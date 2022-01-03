q=""

number=input("inserisci il numero") 

while int(number)>0:

    if int(number)%2==1:
            q="0"+str(q)
            
    elif int(number)%2==0:
            q="1"+str(q)
    number=(int(number)//2)
    
    
print (q)