def conversion(number):
    ordinal = {1: "first", 2: "second", 3: "third", 4: "fourth", 5: "fifth", 6: "sixth", 7: "seventh",
               8: "eighth", 9: "ninth", 10: "tenth", 11: "eleventh", 12: "twelfth"}
    if number in range(1,13):
        return ordinal[number]
    return ""

if __name__ == '__main__':
    for number in range(1,13):
     print(f"The ordinal number referred to {number} is \"{conversion(number)}\".")
     