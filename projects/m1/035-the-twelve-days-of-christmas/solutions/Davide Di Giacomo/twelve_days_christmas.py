ordinal_numbers = ["First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh", "Twelfth"]
string_song = ["turtle doves\nAnd a partridge in a pear tree!", "french hens","calling birds","golden rings!","geese a layin","swans a swimmin","maids milkin","ladies dancin", "lords a leapin", "pipers pipin", "drummers drummin"]

def christmas_song(day):
  print(f"\nOn the {(ordinal_numbers[day-1])} day of Christmas\nMy true love sent to me:")
  if day == 1:
    print("A partridge in a pear tree!")
  elif day == 2:
      print(str(day) + " " + string_song[day-2])
  elif  day == 3:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 4:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 5:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 6:
     for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 7:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 8:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 9:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 10:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 11:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
  elif  day == 12:
      for i in range (day-1):
        print(str(day) + " " + string_song[day-2])
        day-=1
               
for day in range (1, 13):
        christmas_song(day)
