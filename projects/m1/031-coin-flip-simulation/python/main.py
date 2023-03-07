import random

sequence = ''
average = 0

for i in range(0,10):
    while sequence.count('TTT') == False and sequence.count('HHH') == False:
        value = random.randint(0,1)
        if value == 0:
            sequence += 'H'
        else:
            sequence += 'T'
    average += len(sequence)
    print(f'{sequence} ({len(sequence)} flips)')
    sequence = ''

print(f'On average {average / 10} were needed.')