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
date = input('Please enter your month of birth: ')
date_n = int(input("Please enter the day of your birth: "))
#I couldn't merge the inputs into one because writing down the code would have been a pain in the back for me

if date == 'december' and 22 <= date_n <= 31 or date == 'january' and 1 <= date_n <= 19:
    astro = 'capricorn'

elif date == 'january' and 20 <= date_n <= 31 or date == 'february' and 1 <= date_n <= 18:
    astro = 'aquarius'

elif date ==  'february' and 19 <= date_n <= 29 or date == 'march' and 1 <= date_n <= 20:
    astro = 'pisces'

elif date == 'march' and 21 <= date_n <= 31 or date == 'april' and 1 <= date_n <= 19:
    astro = 'Aries'

elif date == 'april' and 20<= date_n <= 30 or date == 'may' and 1 <= date_n <= 20:
    astro = 'taurus'

elif date == 'may' and 21 <= date_n <= 31 or date == 'june' and 1 <= date_n <= 20:
    astro = 'gemini'

elif date == 'june' and 21 <= date_n <= 31 or date == 'july' and 1 <= date_n <= 22:
    astro = 'cancer'

elif date == 'july' and 23 <= date_n <= 31 or date == 'august' and 1 <= date_n <= 22:
    astro = 'leo'

elif date == 'august' and 23 <= date_n <= 31 or date == 'september' and 1 <= date_n <= 22:
    astro = 'Virgo'

elif date == 'september' and 23 <= date_n <= 30 or date == 'october' and 1 <= date_n <= 22:
    astro = 'Libra'

elif date == 'october' and 23 <= date_n <= 31 or date == 'november' and 1 <= date_n <= 21:
    astro = 'scorpio'

elif date == 'november' and 22 <= date_n <= 30 or date == 'december' and 1 <= date_n <=21:
    astro = 'saggittarius'

print("Your sign is: " + astro + ".")