#Bith Date to Astrological Sign
 
birth_day = int(input("Enter the birthdate: as a number of a day, example: 29 ---> "))


birth_month = int(input("Enter the month of birth: as a number, example: 6 if you are born in June ---> "))



sign = 0 # in order to define provisionally the variable

 

if birth_month == 12:
   
    if (birth_day < 22):
        sign = "sagittarius"
    else:
        sign ="capricorn"
    
         
elif (birth_month == 1):
    
    if (birth_day < 20):
        sign = "capricorn"
    else:
        sign = "aquarius"
    
         
elif (birth_month == 2):
    
    if (birth_day < 19):
        sign = "aquarius"
    else:
        sign = "pisces"
    
         
elif (birth_month == 3):
    
    if (birth_day < 21):
        sign = "pisces"
    else:
        sign = "aries"
    
elif (birth_month == 4):
    
    if (birth_day < 20):
        sign = "aries"
    else:
        sign = "taurus"
    
         
elif (birth_month == 5):
    
    if (birth_day < 21):
        sign = "taurus"
    else:
        sign = "gemini"
    
         
elif( birth_month == 6):
    
    if (birth_day < 21):
        sign = "gemini"
    else:
        sign = "cancer"
    
         
elif (birth_month == 7):
    
    if (birth_day < 23):
        sign = "cancer"
    else:
        sign = "leo"
    
         
elif(birth_month == 8):
    
    if (birth_day < 23):
        sign = "leo"
    else:
        sign = "virgo"
    
         
elif (birth_month == 9):
    
    if (birth_day < 23):
        sign = "virgo"
    else:
        sign = "libra"
    
         
elif (birth_month == 10):
    
    if (birth_day < 23):
        sign = "libra"
    else:
        sign = "scorpio"
    
         
elif (birth_month == 11):
    
    if (birth_day < 22):
        sign = "scorpio"
    else:
        sign = "sagittarius"
      
else:
      
    print("Something go wrong - Please, do(n't) repeat this Game!!!")
    
    
print(f"Birthday: {birth_day} - Month: {birth_month} ---> {sign} ")

