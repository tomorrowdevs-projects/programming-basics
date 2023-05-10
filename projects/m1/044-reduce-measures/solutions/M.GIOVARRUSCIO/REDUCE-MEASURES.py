"""
Many recipe books still use cups, tablespoons and teaspoons to describe the volumes of
ingredients used when cooking or baking. While such recipes are easy enough to follow
if you have the appropriate measuring cups and spoons, they can be difficult to double,
triple or quadruple when cooking Christmas dinner for the entire extended family.
For example, a recipe that calls for 4 tablespoons of an ingredient requires
16 tablespoons when quadrupled. However,
16 tablespoons would be better expressed (and easier to measure) as 1 cup.
Write a function that expresses an imperial volume using the largest units possible.
The function will take the number of units as its first parameter,
and the unit of measure (cup, tablespoon or teaspoon) as its second parameter.
It will return a string representing the measure using
the largest possible units as its only result.
For example, if the function is provided with parameters representing
59 teaspoons then it should return the string “1 cup, 3 tablespoons, 2 teaspoons”.

"""
def reduce(number,mis):
    if mis=="cup":
        return f"{number} cup"
    elif mis=="tablespoon":
        return reduce(number//16,"cup")+","+ f" {number%16} tablespoons"
    else:
        return reduce(number//3,"tablespoon")+","+f" {number%3} teaspoons"

if __name__=='__main__':
    number=int(input("Insert number of units "))
    mis=input("Insert unit of measure ((cup, tablespoon or teaspoon))")
    print(reduce(number,mis))