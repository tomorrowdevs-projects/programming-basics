def distance_cost():
    base=4.00
    reach=140
    cash=(float(base)+((float(int(km)*1000)//reach)*0.25))
    print (cash)
km=(input ("insert the value of km "))
distance_cost()