factor=2
while True :
    number=input("inserisci il numero") 
    if (number==""):
        break


    if int(number)<=2:
        print("errore") 
        break
    
    while (int(number) > factor):
        
        if ((int(number)%factor)==0):
            number=int(number)/factor
            print(int(factor))
            continue
       
        else:
            
            factor+=1
 
    print (int(number))
    factor=2