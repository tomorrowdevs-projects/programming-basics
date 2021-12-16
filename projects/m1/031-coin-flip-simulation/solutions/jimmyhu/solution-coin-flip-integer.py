import random 
flips_trys = []

while len(flips_trys) < 10:
    #set an initial elemente because i want to compare le next element whith the previus one 
    flips_result = [random.choice(['H','T'])]
    count = 1
    while count < 3:
        flip = random.choice(['H','T'])
        #compare le new one with the last on the list, if is equal add 1 to count otherwise reset the cound
        if flip == flips_result[len(flips_result) -1]:
            count += 1
        else:
            count = 1
        flips_result.append(flip) 
    flips_trys.append(len(flips_result))
    print(f"{' '.join(flips_result)}  ({len(flips_result)} flips)")
average = sum(flips_trys) / len(flips_trys)
print(f"On average, {average} flips were needed")