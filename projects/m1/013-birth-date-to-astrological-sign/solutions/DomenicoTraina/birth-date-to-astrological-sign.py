user_month=input("Enter your birth month: ")
user_day=int(input("Enter your birth day: "))

month_list=("janaury","february","march","april","may","june","july","august","september","october","november","dicember")

if user_month=="january":
    if user_day <= 19: print("Your zodiach sign is Capricorn")
    else:              print("Your zodiach sign is Aquarius")
if user_month=="february":
    if user_day <= 18: print("Your zodiach sign is Aquarius")
    else:              print("Your zodiach sign is Pisces")
if user_month=="march":
    if user_day <= 20: print("Your zodiach sign is Pisces")
    else:              print("Your zodiach sign is Aries")
if user_month=="april":
    if user_day <= 19: print("Your zodiach sign is Aries")
    else:              print("Your zodiach sign is Taurus")
if user_month=="may":
    if user_day <= 20: print("Your zodiach sign is Taurus")
    else:              print("Your zodiach sign is Gemini")
if user_month=="june":
    if user_day <= 20: print("Your zodiach sign is Gemini")
    else:              print("Your zodiach sign is Cancer")
if user_month=="july":
    if user_day <= 22: print("Your zodiach sign is Cancer")
    else:              print("Your zodiach sign is Leo")   
if user_month=="Agoust":
    if user_day <= 22: print("Your zodiach sign is Leo")
    else:              print("Your zodiach sign is Virgo")
if user_month=="September":
    if user_day <= 22: print("Your zodiach sign is Virgo")
    else:              print("Your zodiach sign is Libra")
if user_month=="October":
    if user_day <= 19: print("Your zodiach sign is Libra")
    else:              print("Your zodiach sign is Scorpio")
if user_month=="November":
    if user_day <= 21: print("Your zodiach sign is Scorpio")
    else:              print("Your zodiach sign is Sagittarius")
if user_month=="Dicember":
    if user_day <= 21: print("Your zodiach sign is Sagittarius")
    else:              print("Your zodiach sign is Capricorn")