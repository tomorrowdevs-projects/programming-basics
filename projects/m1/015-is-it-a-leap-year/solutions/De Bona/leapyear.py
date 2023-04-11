year=int (input("Enter a value of year: "))
if year % 400==0:
    print("Anno bisestile")
elif year %100==1:
    print("Anno non bisestile!")
elif year % 4==0:
    print("Anno bistestile")
else:
      print ("Anno non bistestile!" )

