"""
Is It a Leap Year?
Most years have 365 days. However, the time required for the Earth to orbit
the Sun is actually slightly more than that. As a result, an extra day, February 29,
is included in some years to correct for this difference. Such years are referred
to as leap years. The rules for determining whether or not a year is
 a leap year follow:
 • Any year that is divisible by 400 is a leap year.
 • Of the remaining  years, any year that is divisible by 100 is not a leap year.
 • Of the remaining years, any year that is divisible by 4 is a leap year.
 • All other years are not leap years. Write a program that reads a year from the
 user and displays a message indicating whether or not it is a leap year.

"""
anno= int(input ("inserisci l'anno"))

if (anno % 400 == 0) or (anno % 4 == 0) and (anno%100 != 0):
        print("l'anno ", anno, "è BISESTILE  ")
else:
        print ("l'anno ", anno, "NON è BISESTILE  ")