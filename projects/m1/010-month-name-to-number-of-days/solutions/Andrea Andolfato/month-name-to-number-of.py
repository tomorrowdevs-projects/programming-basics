
#reads the name of a month from the user as a string

month_user = input ('Enter the name of a month')

days_30 = 'novemberapriljuneseptember'
days_31 = 'januarymarchmayjulyaugustoctoberdecember'

#display the number of days in that month

if month_user [:2] in days_30:
  print ('30days')

#display "28 or 29 days" for february
elif month_user = february
print ('28 or 29 days')

else:
print ('31 days')