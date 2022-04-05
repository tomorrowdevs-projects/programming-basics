"""In this exercise, your task is to create a function that takes an integer between 0 and
999 as its only parameter, and returns a string containing the English words for that number. 
For example, if the parameter to the function is 142 then your function should return “one hundred forty two”. 
Use one or more dictionaries to implement your solution rather than large if/elif/else constructs"""


def num_in_english(num):
    num_english_dict = { 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine",
                        10: "ten", 11:"eleven", 12:"twelve",13:"thirteen",14:"fourteen",15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen",
                        19: "nineteen", 20:"twenty", 30:"thirty", 40:"fourty",50:"fifty",60:"sixty",70:"seventy",80:"eighty",90:"ninety" }
    output = ""
    if num in num_english_dict:
        output += num_english_dict[num]
    elif num < 100:
        dozens = (num // 10)*10
        units = num - dozens
        output += num_english_dict[dozens] +" "+ num_english_dict[units]
    else:
        hundreds = (num//100)
        if num - hundreds*100 in num_english_dict: #if dozens + units is in the dictionary
            output += num_english_dict[hundreds] + " " + "hundreds" + " " + num_english_dict[num - hundreds*100]
        else:
            dozens = ((num - hundreds*100)//10)*10
            units = num - hundreds*100 - dozens
            output += num_english_dict[hundreds] + " " + "hundreds" + " " + num_english_dict[dozens] + " " + num_english_dict[units]        

    return output

print(num_in_english(10))
print(num_in_english(79))
print(num_in_english(108))
print(num_in_english(265))
print(num_in_english(480))
print(num_in_english(999))


    