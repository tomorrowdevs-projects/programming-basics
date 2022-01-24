day=int(input('write your date of birth : \n'))
month=(input('write your month of birth : \n'))


if month == 'november' :
    if day >= 21 : astro_sign = 'Sagittarius'
    else :
         astro_sign = 'Scorpio'

if month == 'October' :
    if day >= 22  : astro_sign = 'Scorpio'
    else :
        astro_sign = 'Libra'
            
if month == 'September' :
    if day >= 22 : astro_sign = 'Libra'
    else :
        astro_sign = 'Virgo'

if month == 'August' :
    if day >= 22:  astro_sign = 'Virgo'
    else :
        astro_sign = 'Leo'

if month == 'July' :
    if day >= 23:  astro_sign = 'Leo'
    else :
        astro_sign = 'Cancer'

if month == 'June' :
    if day >= 21:  astro_sign = 'Gemini'
    else :
        astro_sign = 'Taurus'

if month == 'April' :
    if day >= 20: astro_sign = 'Taurus'
    else :
        astro_sign = 'Aries'
if month == 'March' :
    if day >= 21: astro_sign = 'Aries'
    else :
        astro_sign = 'Pisces'

if month == 'February' :
    if day >= 19:  astro_sign = 'Pisces'
    else :
        astro_sign = 'Acquarius'

if month == 'January' :
    if day >= 19:  astro_sign = 'Acquarius'
    else :
        astro_sign = 'Capricorn' 

if month == 'December' :
    if day >= 21: astro_sign = 'Capricorn' 
    else :
        astro_sign = 'Sagittarius'
            
print(resuastro_signlt )