
#program that uses  functions to simulate rolling two six-sided dice

from random import randint

def sub_dices():                                           #function that adds up the random values from two dice
  dice1 = randint(1,6)
  dice2 = randint(1,6)

  return dice1 + dice2

count = {}

for i in range(2, 13):
  count[i] = 0



num_rolls = int(input('Enter the number of times you want to roll the dice '))

for ele in range(num_rolls):                                                   #append how many times we got that specific total by rolling two dice
  count[sub_dices()] += 1

print('This is how many times we got that specific number:')
print(count)

print('The percentage of rolls dice was:')


#calculate the percentage of rolls dice that we got for each total

percentage = {}
percent_lis = []
val_lis = list(count.values())
for x in val_lis:
  percent_calc = x * 100 / num_rolls
  percent_lis.append(percent_calc)


#append all the values to the dictionary 'percentage'

l = 0
while l < len(percent_lis):
    percentage[l + 2] = percent_lis[l]
    l +=1

print(percentage)


#calculate the percentage expected by probability theory for each total

probability = {}
prob_one = 1/36*100
prob_two = 2/36*100
prob_three = 3/36*100
prob_four = 4/36*100
prob_five = 5/36*100
prob_six = 6/36*100


#append all the percentage expected by the probability to the dictionary 'probability'

probability[2] = prob_one
probability[3] = prob_two
probability[4] = prob_three
probability[5] = prob_four
probability[6] = prob_five
probability[7] = prob_six
probability[8] = prob_five
probability[9] = prob_four
probability[10] = prob_three
probability[11] = prob_two
probability[12] = prob_one

print('The percentage expected by the probability is:')
print(probability)