print("""\
The horoscopes commonly reported in newspapers use the position of the sun at the time of one’s birth to try and predict the future. 
This system of astrology divides the year into twelve zodiac signs, as outline in the table below:


| Zodiac Sign |       Date Range           |
|-------------|----------------------------|
| Capricorn   | December 22 to January 19  |
| Aquarius    | January 20 to February 18  |
| Pisces      | February 19 to March 20    |
| Aries       | March 21 to April 19       |
| Taurus      | April 20 to May 20         |
| Gemini      | May 21 to June 20          |
| Cancer      | June 21 to July 22         |
| Leo         | July 23 to August 22       |
| Virgo       | August 23 to September 22  |
| Libra       | September 23 to October 22 |
| Scorpio     | October 23 to November 21  |
| Sagittarius | November 22 to December 21 |

Write a program that asks the user to enter his or her month and day of birth. 
Then your program should report the user’s zodiac sign as part of an appropriate output message.

""")
m=int(input("inserire mese:"))
d=int(input("inserire giorno:"))
if m==1:
    if d<=19:
        print("Capricorn")
    else:
        print("Aquarius")
elif m==2:
    if d<=18:
        print("Aquarius")
    else:
        print("Pisces")
elif m==3:
    if d<=20:
        print("Pisces")
    else:
        print("Aries")
elif m==4:
    if d<=19:
        print("Aries")
    else:
        print("Taurus")
elif m==5:
    if d<=20:
        print("Taurus")
    else:
        print("Gemini")
elif m==6:
    if d<=20:
        print("Gemini")
    else:
        print("Cancer")
elif m==7:
    if d<=22:
        print("Cancer")
    else:
        print("Leo")
elif m==8:
    if d<=22:
        print("Leo")
    else:
        print("Virgo")
elif m==9:
    if d<=22:
        print("Virgo")
    else:
        print("Libra")
elif m==10:
    if d<=22:
        print("Libra")
    else:
        print("Scorpio")
elif m==11:
    if d<=21:
        print("Scorpio")
    else:
        print("Sagittarius")
else:
    if d<=21:
        print("Sagittarius")
    else:
        print("Capricorn")