"""

Write a function that determines how many days there are in a particular month.
Your function will take two parameters: The month as an integer between 1 and 12,
and the year as a four digit integer.
Ensure that your function reports the correct number of days in February for leap years.
Include a main program that reads a month and year from the user and displays
the number of days in that month.

"""
def leapyear(anno):
    if (anno % 400 == 0) or ((anno % 4 == 0) and (anno % 100 != 0)):
        return True
    else:
        return False
def calcolagiorni(mm,aa):
    if mm in [1, 3, 5, 6, 7, 10, 12]:
        return 31
    elif mm in [11, 4, 6, 9]:
        return 30
    elif mm == 2 and leapyear(aa):
        return 29
    elif mm == 2 and not leapyear(aa):
        return 28
if __name__ == '__main__':
    mm = int(input("mounth:"))
    aa = int(input("year:"))
    day=calcolagiorni(mm,aa)
    print("Il numero di giorni per il mese ",mm," dell'anno ", aa, "è :" ,day)