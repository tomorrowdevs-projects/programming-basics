months = ['january','february','march','april','may','june','july','august','september','october','november','december']
sign = ['Capricorn','Aquarius','Pisces','Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius']
bmonth = input('plese enter your birth month: ').lower()
bday = int(input('please enter your birth day: '))
def zodiac(m,d):
    if d > 31 or d <= 0 or m not in months:
        print('error!')   
    else:
        index = months.index(bmonth)
        if m == months[6] or m == months[7] or m == months[8] or m == months[9]:
            if d < 23:
                choosen = sign[index]
            else:
                choosen = sign[index + 1]
        if m == months[10] or m == months[11]:
            if d > 21 and index == 11:
                choosen = sign[0]
            elif d > 21 and index != 11:
                choosen = sign[index + 1]
            else:
                choosen = sign[index]
        if m == months[2] or m == months[4] or m == months[5]:
            if d < 21:
                choosen = sign[index]
            else:
                choosen = sign[index + 1]
        if m == months[0] or m == months[3]:
            if d < 20:
                choosen = sign[index]
            else:
                choosen = sign[index + 1]
        if m == months[2]:
            if d < 19:
                choosen = sign[index]
            else:
                choosen = sign[index + 1]
    print('your sign is: ' + choosen)
zodiac(bmonth,bday)