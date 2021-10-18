# When analysing data collected as part of a science experiment it may be desirable to remove
# the most extreme values before performing other calculations.
# Write a function that takes a list of values and an non-negative integer, n, as its parameters.
# The function should create a new copy of the list with the n largest elements and the n smallest elements removed.
# Then it should return the new copy of the list as the function’s only result.
# The order of the elements in the returned list does not have to match the order of the elements in the original list.
# Write a main program that demonstrates your function.
# It should read a list of numbers from the user and remove the two largest and two smallest values from it by calling
# the function described previously. Display the list with the outliers removed, followed by the original list.
# Your program should generate an appropriate error message if the user enters less than 4 values.

parameters = []
while True:
    print("\nEnter your parameters (for stop the sequence enter '0')")
    user_parameter = int(input())
    parameters.append(user_parameter)
    if user_parameter == 0:
        break
parameters.remove(0)
if len(parameters) <= 4:
    print("\nError! You must enter not less than 4 values.")
else:
    print("\n")
    for parameter in parameters:
        print(parameter)
    
    def removeOutliers(p):
        p.sort()
        p[0:2] = []
        p[len(p) - 2:] = []
        for value in p:
            print(value)
    print("\n")
    removeOutliers(parameters)
    
