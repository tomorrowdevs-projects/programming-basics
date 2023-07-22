#random module import and creation of variables that don't have to reset their value
import random
total_flips = 0

#set the loop to itirate 10 times + variables that have their values resetted to 0 for each loop
for simulations in range(10):
    flip = 0
    h = 0
    t = 0

    #set the loop to simulate flips that stop if one of condition is met(not true)
    while h < 3 and t < 3:
        #variable with random value and count the flip
        outcome = random.randint(0, 1)
        flip += 1
        if outcome == 0:
            t += 1
            h = 0
            print('T', end = '')
        else:
            h += 1
            t = 0
            print('H', end = '')
    
    #display in the row (simulation) the amount of flips needed
    #add the flips happened in the row/simulation to the total amount of flips happened
    print(' (' + str(flip) + ' flips needed)')
    total_flips += flip

#compute and display the average of flips needed with proper message
print('On average, ' + str(total_flips/10) + ' flips were needed')