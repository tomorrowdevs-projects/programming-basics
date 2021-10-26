# Many recipe books still use cups, tablespoons and teaspoons to describe the volumes of ingredients used
# when cooking or baking. While such recipes are easy enough to follow if you have the appropriate measuring cups and spoons,
# they can be difficult to double, triple or quadruple when cooking Christmas dinner for the entire extended family.
# For example, a recipe that calls for 4 tablespoons of an ingredient requires 16 tablespoons when quadrupled.
# However, 16 tablespoons would be better expressed (and easier to measure) as 1 cup.
# Write a function that expresses an imperial volume using the largest units possible.
# The function will take the number of units as its first parameter, and the unit of measure
# (cup, tablespoon or teaspoon) as its second parameter.
# It will return a string representing the measure using the largest possible units as its only result.
# For example, if the function is provided with parameters representing 59 teaspoons then it should return the string “1 cup,
# 3 tablespoons, 2 teaspoons”.

print("\nEnter your measure in teaspoons")
teaspoons = int(input())

def imperialVolume(t):
    tablespoons = int(t / 3)
    cups = int(tablespoons / 16)
    rest_teaspoons = t % 3
    rest_tablespoons = tablespoons % 16

    return print(str(cups) + " cup/s, " + str(rest_tablespoons) + " tablespoon/s, " + str(rest_teaspoons) + " teaspoon/s.")

imperialVolume(teaspoons)