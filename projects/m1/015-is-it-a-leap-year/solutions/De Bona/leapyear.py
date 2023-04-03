year=int (input("enter a value of year"))
if year % 400==1:
    print("non divisibile per 400 ")
elif year %100==1:
    print("non divisibile per 100 ")
elif year % 4==0:
    print("anno bistestile")
elif year % 4==1:
    print ("anno non bistestile" )

