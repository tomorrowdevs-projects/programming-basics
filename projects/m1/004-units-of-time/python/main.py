days = int (input("Insert days "))
hours = int (input("Insert hours "))
minutes = int (input("Insert minutes "))
seconds = int (input("Insert seconds "))

Duration = seconds + minutes * 60 + hours *60*60 + days *60*24*60

print("The duration of your input is",Duration,"seconds")
