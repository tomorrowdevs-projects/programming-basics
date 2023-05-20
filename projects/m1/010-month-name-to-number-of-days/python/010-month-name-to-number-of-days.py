
# diplay the number of days in a month.

month = input ("If you don't remember the doggerel for know the number of days in a month i will help you.Enter the month: ")

if month == "April" or month == "June" or month == "September" \
                                       or month == "November":
   print ("30")
elif month == "February":
   print ( "28 , 29 every four years")

if month == "January" or month == "March" or month == "May" or month == "July" or month == "August" or month == "October" or month == "December":
  print ("31")
