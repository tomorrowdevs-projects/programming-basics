# The program asks of the user to enter his or her month and day of birth and report the  zodiac sign
day=int(input( "Enter day of birth: "))
month= input("Enter month of birth: ").lower()
if (day <= 22 and month =='january') or (day >= 22 and month =='december'):
    print("your zodiac sign is CAPRICORN ")
elif(day >= 20 and month =='january') or  (day <= 18 and month == 'february'):
    print("your zodiac sign is AQUARIUS")
elif(day <= 20 and month =='march')  or ( day >= 19 and month =='february'):
    print("your zodiac sign is PISCES")
elif(day >= 21 and month =='march') or (day <=19 and month =='april'):
    print("your zodiac sign is ARIES")
elif(day >= 20 and month =='april' )or (day <= 20 and month =='may'):
    print("your zodiac sign is TAURUS")
elif(day >= 21 and month =='may' )or (day <= 20 and month =='june'):
    print("your zodiac sign is GEMINI")
elif (day <= 22 and month =='july' ) or (day >= 21 and month =='june'):
    print("your zodiac sign is CANCER")
elif (day >= 23 and month=='july') or (day <= 22 and month =='august'):
    print("your zodiac sign is LEO")
elif (day >= 23 and month=='august' ) or (day <= 22 and month =='september'):
    print("your zodiac sign is VIRGO")
elif (day <= 22 and month=='october') or (day >=  23  and month =='september'):
    print("your zodiac sign is LIBRA")
elif (day >= 23 and month=='october' )or (day <= 21 and month =='november'):
    print("your zodiac sign is SCORPIO")
elif (day >= 22 and month=='november')  or (day <= 21 and month =='december'):
    print("your zodiac sign is SAGITTARIUS")
