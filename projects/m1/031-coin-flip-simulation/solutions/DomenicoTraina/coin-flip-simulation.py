import random
flip=0
money_list=[]


for index in range(10):
    while True:    
        money=random.randint(0,1)
        if money==0:   
            money_list.append(0)
            flip+=1
            print("H", end=' ')

        elif money==1: 
            money_list.append(1)
            flip+=1
            print("T", end=' ')
        if flip>=2:    
            if (money_list[flip]==money_list[flip-1]==money_list[flip-2]):
                break
    print (f"{flip} needed")

      


