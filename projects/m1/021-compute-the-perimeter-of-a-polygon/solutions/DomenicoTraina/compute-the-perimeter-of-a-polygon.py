import math
points_x=[]
points_y=[]
i=0
perimeter=0
print ("Enter '00' for stop in a X point")
while True:
    index=i+1
    coord_x=int(input('Enter X{} : '.format(index)))
    points_x.append(coord_x)
    if coord_x==00:
        break
    coord_y=int(input('Enter Y{} : '.format(index)))
    points_y.append(coord_y) 
    if i>0:
        distance=math.sqrt((points_x[i-1] - points_x[i])**2 + (points_y[i-1] - points_y[i])**2)
        perimeter=perimeter+distance   
    i=i+1   
print (f"Perimeter is {perimeter:.2f}")



