
month_30 = ['april', 'june', 'september', 'november']
month_31 = ['january', 'march', 'may', 'july', 'august', 'october', 'december']

print("\nHi folks! Do you have the same problem that i have to remember how many days have a month?"
      "\nThis program is the solution of our problem!"
      "\nInsert the name of the month you need and you will have the answer!")

month_name = str.lower(input("\nInsert here the month's name: "))

if month_name in month_30:
    print(f"\n{month_name} consist of 30 days\n")
elif month_name in month_31:
    print(f"\n{month_name} consist of 31 days\n")
elif month_name == 'february':
    print(f"\n{month_name} consist of 28 or 29 days\n")
else:
    print(f"\n{month_name} not exist\n")
