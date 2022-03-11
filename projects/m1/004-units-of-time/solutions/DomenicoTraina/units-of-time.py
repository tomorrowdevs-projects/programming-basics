 # this program will converte days,hours,minutes,seconds to only seconds.
days=int(input("How many days? "))
hours=int(input("How many hours? "))
minutes=int(input("How many minutes? "))
seconds=int(input("How many seconds? "))

secondbyminutes=minutes*60
secondbyhours=hours*3600
secondbydays=days*24*3600

totalsecond=seconds+secondbyminutes+secondbyhours+secondbydays

print("In {} days, {} hours, {} minutes, {} seconds, there are exactly {} seconds ".format(days,hours,minutes,seconds,totalsecond))