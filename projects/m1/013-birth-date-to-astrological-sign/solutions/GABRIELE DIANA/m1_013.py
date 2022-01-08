# Birth Date to Astrological Sign

# The horoscopes commonly reported in newspapers use the position of the sun at the time of one’s birth to try and predict the future. 
# This system of astrology divides the year into twelve zodiac signs, as outline in the table below:


# | Zodiac Sign |       Date Range           |
# |-------------|----------------------------|
# | Capricorn   | December 22 to January 19  |
# | Aquarius    | January 20 to February 18  |
# | Pisces      | February 19 to March 20    |
# | Aries       | March 21 to April 19       |
# | Taurus      | April 20 to May 20         |
# | Gemini      | May 21 to June 20          |
# | Cancer      | June 21 to July 22         |
# | Leo         | July 23 to August 22       |
# | Virgo       | August 23 to September 22  |
# | Libra       | September 23 to October 22 |
# | Scorpio     | October 23 to November 21  |
# | Sagittarius | November 22 to December 21 |

# Write a program that asks the user to enter his or her month and day of birth. 
# Then your program should report the user’s zodiac sign as part of an appropriate output message.

# Documentation

# For this project solution you may use:

# - Variables, expressions, statements
# - Conditionals and recursion
# - Iteration
# - Strings

# Deadline

# This project requires to be completed in a maximum of **2 hours**

# Ask input from the user, split in 2 variables and make day an int.
user_date = input("Please enter your month and day of birth: ").split()
month = user_date[0].lower()
day = int(user_date[1])

# Create a function to associate zodiac signs depending on month and range of days.
def sign(month, day):
    if month == "january":
        if -18 <= (day-19) <= 0:
            return "Capricorn"
        elif 1 <= (day-19) <= 12:
            return "Aquarius"
        else:
            return "Please Enter a valid date"
    elif month == "february":
        if -17 <= (day-18) <= 0:
            return "Aquarius"
        elif 1 <= (day-18) <= 11:
            return "Pisces"
        else:
            return "Please Enter a valid date"
    elif month == "march":
        if -19 <= (day-20) <= 0:
            return "Pisces"
        elif 1 <= (day-20) <= 11:
            return "Aries"
        else:
            return "Please Enter a valid date"
    elif month == "april":
        if -19 <= (day-20) <= 0:
            return "Aries"
        elif 1 <= (day-20) <= 10:
            return "Taurus"
        else:
            return "Please Enter a valid date"
    elif month == "may":
        if -19 <= (day-20) <= 0:
            return "Taurus"
        elif 1 <= (day-20) <= 11:
            return "Gemini"
        else:
            return "Please Enter a valid date"
    elif month == "june":
        if -19 <= (day-20) <= 0:
            return "Gemini"
        elif 1 <= (day-20) <= 10:
            return "Cancer"
        else:
            return "Please Enter a valid date"
    elif month == "july":
        if -21 <= (day-22) <= 0:
            return "Cancer"
        elif 1 <= (day-22) <= 9:
            return "Leo"
        else:
            return "Please Enter a valid date"
    elif month == "august":
        if -21 <= (day-22) <= 0:
            return "Leo"
        elif 1 <= (day-22) <= 9:
            return "Virgo"
        else:
            return "Please Enter a valid date"
    elif month == "september":
        if -21 <= (day-22) <= 0:
            return "Virgo"
        elif 1 <= (day-22) <= 8:
            return "Libra"
        else:
            return "Please Enter a valid date"
    elif month == "october":
        if -21 <= (day-22) <= 0:
            return "Libra"
        elif 1 <= (day-22) <= 9:
            return "Scorpio"
        else:
            return "Please Enter a valid date"
    elif month == "november":
        if -20 <= (day-21) <= 0:
            return "Scorpio"
        elif 1 <= (day-21) <= 9:
            return "Sagittarius"
        else:
            return "Please Enter a valid date"
    elif month == "december":
        if -20 <= (day-21) <= 0:
            return "Sagittarius"
        elif 1 <= (day-21) <= 10:
            return "Capricorn"
        else:
            return "Please Enter a valid date"


print("Your sign is " + sign(month, day))
