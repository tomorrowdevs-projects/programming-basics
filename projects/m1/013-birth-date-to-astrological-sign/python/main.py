month = input("Please enter your birth month: ")
day = int(input("Enter your birth day: "))

zodiac_signs = { 'Capricorn' : ('December 22', 'January 19'),
               'Aquarius' : ('January 20', 'February 18'),
               'Pisces' : ('February 19', 'March 20'),
               'Aries' : ('March 21', 'April 19'),
               'Taurus' : ('April 20', 'May 20'),
               'Gemini' : ('May 21', 'June 20'),
               'Cancer' : ('June 21', 'July 22'),
               'Leo' : ('July 23', 'August 22'),
               'Virgo' : ('August 23', 'September 22'),
               'Libra' : ('September 23', 'October 22'),
               'Scorpio' : ('October 23', 'November 21'),
               'Sagittarius' : ('November 22', 'Dicember 21')}

zodiac_sign = None

for sign, (start_date, end_date) in zodiac_signs.items():
    start_month, start_day = start_date.split()
    end_month, end_day = end_date.split()
    if (month == start_month and day >= int(start_day)) or (month == end_month and day <= int(end_day)):
        zodiac_sign = sign
        break

if zodiac_sign: 
    print(zodiac_sign)
else: 
    print("Error. Please insert a valid date.")



