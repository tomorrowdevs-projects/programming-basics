# The horoscopes commonly reported in newspapers use the position of the sun at the time of one’s birth to try and predict the future. This system of astrology divides the year into twelve zodiac signs, as outline in the table below:

# Zodiac Sign	Date Range
# Capricorn	December 22 to January 19
# Aquarius	January 20 to February 18
# Pisces	February 19 to March 20
# Aries	March 21 to April 19
# Taurus	April 20 to May 20
# Gemini	May 21 to June 20
# Cancer	June 21 to July 22
# Leo	July 23 to August 22
# Virgo	August 23 to September 22
# Libra	September 23 to October 22
# Scorpio	October 23 to November 21
# Sagittarius	November 22 to December 21

# Write a program that asks the user to enter his or her month and day of birth. Then your program should report the user’s zodiac sign as part of an appropriate output message.

print("\nEnter your birth month (Es. 'January')")
birth_month = input()
print("\nGreat! Now enter your birth day")
birth_day = input()

if birth_month == "December" and int(birth_day) >= 22 or birth_month == "January" and int(birth_day) <= 19:
    print("\nYour Zodiac Sign is CAPRICORN!")
elif birth_month == "January" and int(birth_day) >= 20 or birth_month == "February" and int(birth_day) <= 18:
    print("\nYour Zodiac Sign is ACQUARIUS!")
elif birth_month == "February" and int(birth_day) >= 19 or birth_month == "March" and int(birth_day) <= 20:
    print("\nYour Zodiac Sign is PISCES!")
elif birth_month == "March" and int(birth_day) >= 21 or birth_month == "April" and int(birth_day) <= 19:
    print("\nYour Zodiac Sign is ARIES!")
elif birth_month == "April" and int(birth_day) >= 20 or birth_month == "May" and int(birth_day) <= 20:
    print("\nYour Zodiac Sign is TAURUS!")
elif birth_month == "May" and int(birth_day) >= 21 or birth_month == "June" and int(birth_day) <= 20:
    print("\nYour Zodiac Sign is GEMINI!")
elif birth_month == "June" and int(birth_day) >= 21 or birth_month == "July" and int(birth_day) <= 22:
    print("\nYour Zodiac Sign is CANCER!")
elif birth_month == "July" and int(birth_day) >= 23 or birth_month == "August" and int(birth_day) <= 22:
    print("\nYour Zodiac Sign is LEO!")
elif birth_month == "August" and int(birth_day) >= 23 or birth_month == "September" and int(birth_day) <= 22:
    print("\nYour Zodiac Sign is VIRGO!")
elif birth_month == "September" and int(birth_day) >= 23 or birth_month == "October" and int(birth_day) <= 22:
    print("\nYour Zodiac Sign is LIBRA!")
elif birth_month == "October" and int(birth_day) >= 23 or birth_month == "November" and int(birth_day) <= 21:
    print("\nYour Zodiac Sign is SCORPIO!")
elif birth_month == "November" and int(birth_day) >= 22 or birth_month == "December" and int(birth_day) <= 21:
    print("\nYour Zodiac Sign is SAGITTARIUS!")