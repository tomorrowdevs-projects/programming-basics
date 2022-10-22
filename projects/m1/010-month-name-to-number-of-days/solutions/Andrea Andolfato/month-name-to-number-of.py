

month_user = input("Enter the name of a month")
days_30 = "november" + "april" + "june" + "september"
days_31 = "january" + "march" + "may" + "july" + "august" + "october" + "december"

if month_user in days_30:
  print("month_user has 30 days")

if month_user in days_31:
  print("month_user has 31 days")

else:
  print("February is a leap year")