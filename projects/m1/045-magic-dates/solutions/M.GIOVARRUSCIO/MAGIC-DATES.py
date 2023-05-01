"""
A magic date is a date where the day multiplied by the month is equal
to the two digit year.
For example, June 10, 1960 is a magic date because June is the sixth month,
and 6 times 10 is 60, which is equal to the two digit year.
Write a function that determines whether or not a date is a magic date.
Use your function to create a main program that finds and displays
all of the magic dates in the 20th century.
"""



def date_magic(day,moun,yeart):
    if (day*moun)==yeart:
        return True
    return False

def leapyear(year):
    if year % 400 == 0:
        return True
    else:
        if (year % 100) == 0:
            return False
        else:
            if (year % 4) == 0:
                return True
            else:
                return False

if __name__ == '__main__':
    ord_mount = {"January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6, "July": 7, "August": 8,
                 "September": 9, "October": 10, "November": 11, "December": 12}
    for i in range(1900,2000,1):
        s=str(i)
        f=int((s[2:4]))
        for j in ord_mount.values():
            if j in [1,3,5,7,8,10,12]:
                for d in range(1, 32, 1):
                    if date_magic(d,j,f):
                        print(f"{d:0>2}-{j}-{i}")
            elif j in [4,6,9,11]:
                for d in range(1, 31, 1):
                    if date_magic(d,j,f):
                        print(f"{d:0>2}-{j}-{i}")
            elif j==2:
                if (leapyear(i)):
                    for d in range(1, 30, 1):
                        if date_magic(d, j, f):
                            print(f"{d:0>2}-{j}-{i}")
                else:
                    for d in range(1, 29, 1):
                        if date_magic(d, j, f):
                            print(f"{d:0>2}-{j}-{i}")


