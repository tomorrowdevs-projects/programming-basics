day = int(input("Insert day "))
hour = int(input("Insert hour "))
minute = int(input("Insert minute "))
second = int(input("Insert secodn "))

formula = (day * 86400) + (hour * 3600) + (minute * 60 ) + second
print (str(formula) + " seconds")