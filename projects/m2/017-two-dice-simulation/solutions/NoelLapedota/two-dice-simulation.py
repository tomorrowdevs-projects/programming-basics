import random
def Two_Dice():
     k = {}    #number of launches and tot
     l = {}    #number of times the number exit
     p = {}    #sum and %
     prob = {2:0.5, 3:5.5, 4:8.3, 5:11.11, 6:13.8, 7: 16.6, 8:13.8, 9:11.11, 10:8.3, 11:5.5, 12:0.5}
     n_tot = []   
     cont = 0
     while cont != 10:
        cont +=1 
        x = random.randint(2,6)
        y = random.randint(2,6)
        tot = x + y
        k.update({cont : tot})
     v = list(k.values())
     for i in v:
         n_tot = v.count(i)
         l.update({i : n_tot})
         perc = (n_tot / 10) * 100
         l.update({i : int(perc)})
         prob.update({i : int(perc)})
        
     
     
     for x, y in prob.items():
       print(x, y)

        
      
     
      
         

Two_Dice()
