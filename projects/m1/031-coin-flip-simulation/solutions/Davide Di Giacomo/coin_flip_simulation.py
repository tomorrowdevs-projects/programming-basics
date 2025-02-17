import random
flips=[]
rounds=[]
   
for i in range(10):
    for i in range(10):
        number = random.randint(1, 2)
        if number == 1:
            trasform=list(flips)
            trasform.append("H")
            flips=tuple(trasform)
        else:
            trasform=list(flips)
            trasform.append("T")
            flips=tuple(trasform)
    
        if len(flips)>3:
            flips=(flips[-3], flips[-2], flips[-1])
    while flips[-3] != flips[-2] or flips[-2] != flips[-1]:
                    number = random.randint(1, 2)
                    if number == 1:
                        trasform=list(flips)
                        trasform.append("H")
                        flips=tuple(trasform)
                    else:
                        trasform=list(flips)
                        trasform.append("T")
                        flips=tuple(trasform)
    else:
                    print(f"{' '.join(flips)} ({len(flips)} flips)")
                    rounds.append(len(flips))
print (f"On average, {sum(rounds)/len(rounds)} flips were needed.")