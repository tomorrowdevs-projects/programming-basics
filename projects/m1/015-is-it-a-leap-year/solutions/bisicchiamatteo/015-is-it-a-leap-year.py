year=input("inseriscil'anno :")
if ((int(year)%400)==0):
    if(((int(year)%100)==0)):
        print("è un anno normale")
    else:
        print ("è un anno bisesitile")
elif((int(year)%4)==0):
       print("è un anno bisestile")
else:
       print("è un anno normale")