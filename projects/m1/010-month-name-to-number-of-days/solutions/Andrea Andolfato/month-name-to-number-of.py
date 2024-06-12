

month_user = input("Enter the name of a month: ")
days_30 = "novemberapriljuneseptember"
days_31 = "januarymarchmayjulyaugustoctoberdecember"

if month_user in days_30:
  month_user_one = "This month has 30 days"
  print(month_user_one)
elif month_user in days_31:
  month_user_two = "This month has 31 days"
  print(month_user_two)
else:
  print("February is a leap year")

