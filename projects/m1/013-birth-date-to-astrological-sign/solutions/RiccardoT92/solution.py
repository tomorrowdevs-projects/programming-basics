'''The horoscopes commonly reported in newspapers use the position of the sun at the time of one’s birth to try and predict the future. 
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
Then your program should report the user’s zodiac sign as part of an appropriate output message.'''


def astro(month,day):
    """Questa funzione chiede come parametri il mese come stringa \n
       ad esempio "december" e come day un numero da 1 a 31 \n
       e si svolge in questo modo: \n
       -se il mese e' uguale a alla stringa in input allora inizializzo una variabile e gli se dico se \n
        day e maggiore o minore si un numero mi ritorni quel segno \n
       -faccio questo procedimento per ogni mese \n 
     """  
           
    
    
    if month =='december':
        astro_sign = 'Sagittarius' if (day < 22) else 'capricorn'
    elif month == 'january':
	    astro_sign = 'Capricorn' if (day < 20) else 'aquarius'
    elif month == 'february':
	    astro_sign = 'Aquarius' if (day < 19) else 'pisces'
    elif month == 'march':
	    astro_sign = 'Pisces' if (day < 21) else 'aries'
    elif month =='april':
	    astro_sign = 'Aries' if (day < 20) else 'taurus'
    elif month == 'may':
	    astro_sign = 'Taurus' if (day < 21) else 'gemini'
    elif month == 'june':
	    astro_sign = 'Gemini' if (day < 21) else 'cancer'
    elif month == 'july':
	    astro_sign = 'Cancer' if (day < 23) else 'leo'
    elif month == 'august':
	    astro_sign = 'Leo' if (day < 23) else 'virgo'
    elif month == 'september':
	    astro_sign = 'Virgo' if (day < 23) else 'libra'
    elif month == 'october':
	    astro_sign = 'Libra' if (day < 23) else 'scorpio'
    elif month == 'november':
	    astro_sign = 'scorpio' if (day < 22) else 'sagittarius'
    return astro_sign
