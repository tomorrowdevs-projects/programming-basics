import random

# initialize the first random integer (between 1 and 100) and the counter for the while loop
first_int = random.randrange(1, 101)
counter = 0


while counter < 100:
    
    random_int = random.randrange(1, 101)
    
    # If the number is less then the previous one stored in first_int just print it
    if random_int <= first_int:
        print(random_int)

    # Else notify the new major one and store into first_int 
    else:
        print(f'{random_int} <== Update')
        first_int = random_int
    
    counter += 1