cost_tot = []

while True:
    guest = str(input("Insert the ages of all of the guests in a group, with one age entered on each line:"))
    if not guest:
        break
    elif int(guest)<3:
        cost_tot.append(0)
                    
    elif 3<=(int(guest))<=12:
        cost_tot.append(14)
                    
    elif(int(guest)>=65):
        cost_tot.append(18)
                       
    elif 12<(int(guest)<65):
        cost_tot.append(23)
    
    
print(f"The admission cost for the group is: {sum(cost_tot):.2f}$")


