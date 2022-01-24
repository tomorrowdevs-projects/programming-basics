import random
lis = []
cont = 0
def gnu(): 
    H = 1
    T = 0
    y =[]
    global cont
    
    while True:
        cont +=1 
        x = random.randint(0,1)
        if x == H:
            print('H', end=' ')
            y.append(H)
          
        elif x == T:
             print('T', end=' ')
             y.append(T)
            #  if len(y) > 3 and y[-2] == T and y[-3] == T:
            #     break
            #  else:
            #      continue
   
        print(f'{cont} flips')
        break

lis.append(cont)
m = len(lis) 
print(str(cont) + ' flips')
print(f'On average, {m} flips were needed.')



