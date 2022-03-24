
from datetime import datetime
currentYear = datetime.now().year    # anno corrente
try:
  year = int(input('Enter one year'))

  day_of_the_week = int((year + float((year - 1) // 4) - float((year - 1) // 100) + float((year - 1) // 400)) % 7)

  if day_of_the_week == 0:                                               #if statements per sapere se l'anno è gia passato oppure no
      if year > currentYear:
       print(f'The first day of the year will be Sunday ({day_of_the_week})')
      else:
       print(f'The first day of the year was Sunday ({day_of_the_week})')
  elif day_of_the_week == 1:
      if year > currentYear:
       print(f'The first day of the year will be Monday ({day_of_the_week})')
      else:
       print(f'The first day of the year was Monday ({day_of_the_week})')
  elif day_of_the_week == 2:
      if year > currentYear:
       print(f'The first day of the year will be Tuesday ({day_of_the_week})')
      else:
       print(f'The first day of the year was Tuesday ({day_of_the_week})')
  elif day_of_the_week == 3:
      if year > currentYear:
       print(f'The first day of the year will be Wednesday ({day_of_the_week})')
      else:
       print(f'The first day of the year was Wednesday ({day_of_the_week})')
  elif day_of_the_week == 4:
      if year > currentYear:
       print(f'The first day of the year will be Thursday ({day_of_the_week})')
      else:
       print(f'The first day of the year was Thursday ({day_of_the_week})')
  elif day_of_the_week == 5:
      if year > currentYear:
       print(f'The first day of the year will be Friday ({day_of_the_week})')
      else:
       print(f'The first day of the year was Friday ({day_of_the_week})')
  elif day_of_the_week == 6:
      if year > currentYear:
       print(f'The first day of the year will be Saturday ({day_of_the_week})')
      else:
       print(f'The first the of the year was Saturday ({day_of_the_week})')
except:
       print(f'Please follow the request ({day_of_the_week})')