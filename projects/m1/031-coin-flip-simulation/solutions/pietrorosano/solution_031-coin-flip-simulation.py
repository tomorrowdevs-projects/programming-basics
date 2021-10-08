# What's the minimum number of times you have to flip a coin before you can have three consecutive flips
# that result in the same outcome (either all three are heads or all three are tails)?
# What's the maximum number of flips that might be needed? How many flips are needed on average?
# In this exercise we will explore these questions by creating a program that simulates several series of coin flips.

# Create a program that uses a random number generator to simulate flipping a coin several times.
# The simulated coin should be fair, meaning that the probability of heads is equal to the probability of tails.
# Your program should flip simulated coins until either 3 consecutive heads of 3 consecutive tails occur.
# Display an H each time the outcome is heads, and a T each time the outcome is tails,
# with all of the outcomes for one simulation on the same line.
# Then display the number of flips that were needed to reach 3 consecutive occurrences of the same outcome.
# When your program is run it should perform the simulation 10 times and report the average number of flips needed.

import random


def head_or_tail1():
    h_or_t1 = []
    while True:
        h_or_t1.append(random.randint(0, 1))
        if len(h_or_t1) >= 3:
            if h_or_t1[len(h_or_t1) - 1] == 1 and h_or_t1[len(h_or_t1) - 2] == 1 and h_or_t1[len(h_or_t1) - 3] == 1 or h_or_t1[len(h_or_t1) - 1] == 0 and h_or_t1[len(h_or_t1) - 2] == 0 and h_or_t1[len(h_or_t1) - 3] == 0:
                for num in h_or_t1:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t1)) + " flips)")
                break    
            else:
                h_or_t1.append(random.randint(0, 1))

def head_or_tail2():
    head_or_tail2 = []
    while True:
        head_or_tail2.append(random.randint(0, 1))
        if len(head_or_tail2) >= 3:
            if head_or_tail2[len(head_or_tail2) - 1] == 1 and head_or_tail2[len(head_or_tail2) - 2] == 1 and head_or_tail2[len(head_or_tail2) - 3] == 1 or head_or_tail2[len(head_or_tail2) - 1] == 0 and head_or_tail2[len(head_or_tail2) - 2] == 0 and head_or_tail2[len(head_or_tail2) - 3] == 0:
                for num in head_or_tail2:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(head_or_tail2)) + " flips)")
                break    
            else:
                head_or_tail2.append(random.randint(0, 1))

def head_or_tail3():
    h_or_t3 = []
    while True:
        h_or_t3.append(random.randint(0, 1))
        if len(h_or_t3) >= 3:
            if h_or_t3[len(h_or_t3) - 1] == 1 and h_or_t3[len(h_or_t3) - 2] == 1 and h_or_t3[len(h_or_t3) - 3] == 1 or h_or_t3[len(h_or_t3) - 1] == 0 and h_or_t3[len(h_or_t3) - 2] == 0 and h_or_t3[len(h_or_t3) - 3] == 0:
                for num in h_or_t3:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t3)) + " flips)")
                break    
            else:
                h_or_t3.append(random.randint(0, 1))

def head_or_tail4():
    h_or_t4 = []
    while True:
        h_or_t4.append(random.randint(0, 1))
        if len(h_or_t4) >= 3:
            if h_or_t4[len(h_or_t4) - 1] == 1 and h_or_t4[len(h_or_t4) - 2] == 1 and h_or_t4[len(h_or_t4) - 3] == 1 or h_or_t4[len(h_or_t4) - 1] == 0 and h_or_t4[len(h_or_t4) - 2] == 0 and h_or_t4[len(h_or_t4) - 3] == 0:
                for num in h_or_t4:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t4)) + " flips)")
                break    
            else:
                h_or_t4.append(random.randint(0, 1))

def head_or_tail5():
    h_or_t5 = []
    while True:
        h_or_t5.append(random.randint(0, 1))
        if len(h_or_t5) >= 3:
            if h_or_t5[len(h_or_t5) - 1] == 1 and h_or_t5[len(h_or_t5) - 2] == 1 and h_or_t5[len(h_or_t5) - 3] == 1 or h_or_t5[len(h_or_t5) - 1] == 0 and h_or_t5[len(h_or_t5) - 2] == 0 and h_or_t5[len(h_or_t5) - 3] == 0:
                for num in h_or_t5:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t5)) + " flips)")
                break    
            else:
                h_or_t5.append(random.randint(0, 1))

def head_or_tail6():
    h_or_t6 = []
    while True:
        h_or_t6.append(random.randint(0, 1))
        if len(h_or_t6) >= 3:
            if h_or_t6[len(h_or_t6) - 1] == 1 and h_or_t6[len(h_or_t6) - 2] == 1 and h_or_t6[len(h_or_t6) - 3] == 1 or h_or_t6[len(h_or_t6) - 1] == 0 and h_or_t6[len(h_or_t6) - 2] == 0 and h_or_t6[len(h_or_t6) - 3] == 0:
                for num in h_or_t6:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t6)) + " flips)")
                break    
            else:
                h_or_t6.append(random.randint(0, 1))

def head_or_tail7():
    h_or_t7 = []
    while True:
        h_or_t7.append(random.randint(0, 1))
        if len(h_or_t7) >= 3:
            if h_or_t7[len(h_or_t7) - 1] == 1 and h_or_t7[len(h_or_t7) - 2] == 1 and h_or_t7[len(h_or_t7) - 3] == 1 or h_or_t7[len(h_or_t7) - 1] == 0 and h_or_t7[len(h_or_t7) - 2] == 0 and h_or_t7[len(h_or_t7) - 3] == 0:
                for num in h_or_t7:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t7)) + " flips)")
                break    
            else:
                h_or_t7.append(random.randint(0, 1))

def head_or_tail8():
    h_or_t8 = []
    while True:
        h_or_t8.append(random.randint(0, 1))
        if len(h_or_t8) >= 3:
            if h_or_t8[len(h_or_t8) - 1] == 1 and h_or_t8[len(h_or_t8) - 2] == 1 and h_or_t8[len(h_or_t8) - 3] == 1 or h_or_t8[len(h_or_t8) - 1] == 0 and h_or_t8[len(h_or_t8) - 2] == 0 and h_or_t8[len(h_or_t8) - 3] == 0:
                for num in h_or_t8:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t8)) + " flips)")
                break    
            else:
                h_or_t8.append(random.randint(0, 1))

def head_or_tail9():
    h_or_t9 = []
    while True:
        h_or_t9.append(random.randint(0, 1))
        if len(h_or_t9) >= 3:
            if h_or_t9[len(h_or_t9) - 1] == 1 and h_or_t9[len(h_or_t9) - 2] == 1 and h_or_t9[len(h_or_t9) - 3] == 1 or h_or_t9[len(h_or_t9) - 1] == 0 and h_or_t9[len(h_or_t9) - 2] == 0 and h_or_t9[len(h_or_t9) - 3] == 0:
                for num in h_or_t9:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t9)) + " flips)")
                break    
            else:
                h_or_t9.append(random.randint(0, 1))

def head_or_tail10():
    h_or_t10 = []
    while True:
        h_or_t10.append(random.randint(0, 1))
        if len(h_or_t10) >= 3:
            if h_or_t10[len(h_or_t10) - 1] == 1 and h_or_t10[len(h_or_t10) - 2] == 1 and h_or_t10[len(h_or_t10) - 3] == 1 or h_or_t10[len(h_or_t10) - 1] == 0 and h_or_t10[len(h_or_t10) - 2] == 0 and h_or_t10[len(h_or_t10) - 3] == 0:
                for num in h_or_t10:
                    if num == 0:
                        print("H", end= " ")
                    elif num == 1:
                        print("T", end= " ")
                print("(" + str(len(h_or_t10)) + " flips)")
                break    
            else:
                h_or_t10.append(random.randint(0, 1))

head_or_tail1()
head_or_tail2()
head_or_tail3()
head_or_tail4()
head_or_tail5()
head_or_tail6()
head_or_tail7()
head_or_tail8()
head_or_tail9()
head_or_tail10()


