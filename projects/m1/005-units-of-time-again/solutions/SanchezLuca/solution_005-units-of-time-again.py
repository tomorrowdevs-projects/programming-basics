sec = int(input('Hello! Insert the number of seconds--> '))
#calcolo il quoziente in numeri interi e poi il resto 
days =  str(sec // 86400)
dd = sec % 86400
hours = str(dd // 3600)
hh = dd % 3600
minutes = str(hh // 60)
mm = hh % 60
seconds = str(mm)
#Inserisco .zfill per visualizzare lo zero davanti alle unità
d = days
h = hours.zfill(2)
m = minutes.zfill(2)
s = seconds.zfill(2)

print(' Days : Hours : Minutes : Seconds --> ',d,':',h,':',m,':',s)
