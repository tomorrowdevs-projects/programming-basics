user_month=input("Enter your birth month: ")
user_day=int(input("Enter your birth day: "))

if user_month=="january":
    if user_day <= 19:
        print("Your zodiach sign is Capricorn")
    else:
        print("Your zodiach sign is Aquarius")
if user_month=="february":
    if user_day <= 18: 
        print("Your zodiach sign is Aquarius")
    else:
        print("Your zodiach sign is Pisces")

##CONTINUARE COSI PER GLI ALTRI MESI