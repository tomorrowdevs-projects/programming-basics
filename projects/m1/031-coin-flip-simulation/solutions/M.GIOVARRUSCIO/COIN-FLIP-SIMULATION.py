"""
What's the minimum number of times you have to flip a coin before
you can have three consecutive flips that result in the same outcome
(either all three are heads or all three are tails)?
What's the maximum number of flips that might be needed? How many flips are needed on average?
In this exercise we will explore these questions
by creating a program that simulates several series of coin flips.

Create a program that uses a random number generator to simulate flipping a coin several times.
The simulated coin should be fair, meaning that the probability of heads is equal to the
probability of tails.
Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive
tails occur. Display an H each time the outcome is heads, and a T each time the outcome is tails,
with all of the outcomes for one simulation on the same line.
Then display the number of flips that were needed to reach 3 consecutive occurrences of the
same outcome. When your program is run it should perform the simulation 10 times and report
the average number of flips needed. Sample output is shown below:

```
H T T T (4 flips)
H H T T H T H T T H H T H T T H T T T (19 flips)
T T T (3 flips)
T H H H (4 flips)
H H H (3 flips)
T H T T H T H H T T H H T H T H H H (18 flips)
H T T H H H (6 flips)
T H T T T (5 flips)
T T H T T H T H T H H H (12 flips)
T H T T T (5 flips)

On average, 7.9 flips were needed.
"""
import random
list=[]
faces = ['T','H']
totale=0
for i in range(1,11):
    conta0=0
    conta1=0
    tot=0
    pre='o'
    list.clear()
    while (conta0<3) and (conta1<3):
        scelta = random.choice(faces)
        list.append(scelta)
        if scelta=='T':
            #se il precedente flip era uguale allora incrementa di 1
            if pre==scelta:
                conta0+=1
            else:
                conta0=1
        else:
            # se il precedente flip era uguale allora incrementa di 1
            if pre==scelta:
                conta1+=1
            else:
                conta1=1
        #memorizza la scelta attuale in pre
        pre=scelta
        tot+=1
    print(list,"(",tot,"flips)")
    totale+=tot
print("On average",totale/10, "flips were needed.")