
while True :
    number=input("inserisci il numero") 
    if int(number)<=0:
        break
    else:
        while (int(number) > 1):
            if ((int(number)%2)!=0):
                number=(3*int(number) + 1)
            else:
                number=(int(number)/ 2)
            print(int(number))