def conversion(number):
    ordinal = {1: "first", 2: "second", 3: "third", 4: "fourth", 5: "fifth", 6: "sixth", 7: "seventh",
               8: "eighth", 9: "ninth", 10: "tenth", 11: "eleventh", 12: "twelfth"}
    if number in range(1, 13):
        return ordinal[number]
    return ""


def gift(day):
    gifts_list = {2: "two turtle doves and a partridge in a pear tree", 3: "three French hens",
                  4: "four calling birds", 5: "five gold rings", 6: "six geese laying eggs",
                  7: "seven swans", 8: "eight milking maids", 9: "nine dancing ladies", 10: "ten leaping lords",
                  11: "eleven piping papers", 12: "twelve drumming drummers"}

    list.append(gifts_list[day])
    return list


if __name__ == '__main__':

    list= []

    print(f"On the first day of Christmas my true love sent to me: a partridge in a pear tree.")
    for day in range(2, 13):
        print(f"On the {conversion(day)} day of Christmas my true love sent to me: {', '.join(gift(day)[::-1])}.")
