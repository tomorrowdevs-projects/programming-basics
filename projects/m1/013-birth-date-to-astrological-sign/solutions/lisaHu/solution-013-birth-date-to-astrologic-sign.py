#The horoscopes commonly reported in newspapers use the position of the sun at the time of one’s birth to try and predict the future. 
#This system of astrology divides the year into twelve zodiac signs, as outline in the table below:


#| Zodiac Sign |       Date Range           |
#|-------------|----------------------------|
#| Capricorn   | December 22 to January 19  |
#| Aquarius    | January 20 to February 18  |
#| Pisces      | February 19 to March 20    |
#| Aries       | March 21 to April 19       |
#| Taurus      | April 20 to May 20         |
#| Gemini      | May 21 to June 20          |
#| Cancer      | June 21 to July 22         |
#| Leo         | July 23 to August 22       |
#| Virgo       | August 23 to September 22  |
#| Libra       | September 23 to October 22 |
#| Scorpio     | October 23 to November 21  |
#| Sagittarius | November 22 to December 21 |

#Write a program that asks the user to enter his or her month and day of birth. 
#Then your program should report the user’s zodiac sign as part of an appropriate output message.



#Input from user, separating month and day
birthMonth = input("Enter your month of birth in lowercase:   ")
birthDay = int(input("Enter your day of birth:     "))

#if month entered is equal to any of these months, the if statement will sort the zodiac sign of the user through their birthDay using a range of numbers
if birthMonth == "january":
    if 1 <= birthDay <= 19:
        print("You are a Capricorn!")
    elif 20 <= birthDay <= 31:
        print("You are an Aquarius!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "february":
    if 1 <= birthDay <= 18:
        print("You are an Acquarius!")
    elif 19 <= birthDay <= 29:
        print("You are a Pisces!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "march":
    if 1 <= birthDay <= 20:
        print("You are a Pisces!")
    elif 21 <= birthDay <= 31:
        print("You are an Aries!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "april":
    if 1 <= birthDay <= 19:
        print("You are an Aries!")
    elif 20 <= birthDay <= 30:
        print("You are a Taurus!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "may":
    if 1 <= birthDay <= 20:
        print("You are a Taurus!")
    elif 21 <= birthDay <= 31:
        print("You are a Gemini!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "june":
    if 1 <= birthDay <= 20:
        print("You are a Gemini!")
    elif 21 <= birthDay <= 30:
        print("You are a Cancer!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "july":
    if 1 <= birthDay <= 22:
        print("You are a Cancer!")
    elif 23 <= birthDay <= 31:
        print("You are a Leo!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "august":
    if 1 <= birthDay <= 22:
        print("You are a Leo!")
    elif 23 <= birthDay <= 31:
        print("You are a Virgo!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "september":
    if 1 <= birthDay <= 22:
        print("You are a Virgo!")
    elif 23 <= birthDay <= 30:
        print("You are a Libra!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "october":
    if 1 <= birthDay <= 22:
        print("You are a Libra!")
    elif 23 <= birthDay <= 31:
        print("You are a Scorpio!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "november":
    if 1 <= birthDay <= 21:
        print("You are a Scorpio!")
    elif 22 <= birthDay <= 30:
        print("You are a Sagittarius!")
    else:
        print('Please, enter a correct number!')
elif birthMonth == "december":
    if 1 <= birthDay <= 21:
        print("You are a Sagittarius!")
    elif 22 <= birthDay <= 31:
        print("You are a Capricorn!")
    else:
        print('Please, enter a correct number!')
else:
    print("Please, refresh and enter a correct month!")