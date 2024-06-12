from random import choice

coin = ["H", "T"]
flips = 0
total_flips = 0
head = 0
tail = 0

for n in range(10):

    while True:
        x = choice(coin)
        flips += 1
        print(x, end=" ")
        
        if x == "H":
            head += 1 
            tail = 0
            if head == 3:
                print(("({} flips)") .format(flips))
                total_flips += flips
                flips = 0
                break
            elif tail > 0:
                tail = 0
           
        elif x == "T":
            tail += 1
            head = 0
            if tail == 3:
                print(("({} flips)") .format(flips))
                total_flips += flips
                flips = 0
                break

average = total_flips/10
print(" ")
print(("On average, {} flips were needed.") .format(average))
        
    
          
        
    
    

    
    
    

            






    


