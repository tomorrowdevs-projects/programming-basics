"""
Write a function that expresses an imperial volume using the largest units possible.
The function will take the number of units as its first parameter, and the unit of measure (cup, tablespoon or teaspoon) as its second parameter. 
It will return a string representing the measure using the largest possible units as its only result. 
For example, if the function is provided with parameters representing 59 teaspoons then it should return the string “1 cup, 3 tablespoons, 2 teaspoons”."""

# 1 cup = 48 teaspoons
# 1 cup = 16 tablespoons
# 1 tablespoon = 3 teaspoons


def measure_conv(num,unit):
    if type(num) == int and (unit == "cups" or unit == "tablespoons" or unit == "teaspoons"):
        if unit == "teaspoons":
            cup_num = num // 48
            tbls_num = (num - (cup_num*48)) // 3
            tea_num = num - (cup_num * 48) - tbls_num*3
            mex = f"{cup_num} cups, {tbls_num} tablespoons, {tea_num} teaspoons"
        elif unit == "tablespoons":
            cup_num = num // 16
            tbls_num = (num - (cup_num*16))
            mex = f"{cup_num} cups, {tbls_num} tablespoons, 0 teaspoons"
        else:
            mex = f"{num} cups, 0 tablespoons, 0 teaspoons"
        
        return mex
    
    else:
        mex = "invalide parameters"
        return mex
    

print(measure_conv(59, "teaspoons"))
print(measure_conv(34,"tablespoons"))
print(measure_conv(4, "cups"))
print(measure_conv(12, "hello"))
print(measure_conv("33", "cups"))