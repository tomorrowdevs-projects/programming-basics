# Write a recursive function that implements the run-length compression technique described in Run-Lenght Decoding Exercise.

# Your function will take a list or a string as its only argu- ment.
# It should return the run-length compressed list as its only result.

# Include a main program that reads a string from the user, compresses it, and displays the run-length encoded result.

# Hint: You may want to include a loop inside the body of your recursive function.

example_list = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B","B","A","A","A","A","A","A","B"]


def encoding_list(ex_list):
    if len(ex_list) == 0:
        return ex_list 
    else:
        counter = 1
        for el in ex_list:
            if counter < len(ex_list) and el == ex_list[counter]:
                counter += 1
            else:
                encoded_list = [el, counter]
                return encoded_list + encoding_list(ex_list[counter:])
                
    
    
print(encoding_list(example_list))
         