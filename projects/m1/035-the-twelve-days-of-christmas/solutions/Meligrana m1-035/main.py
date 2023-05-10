def ordinali(n=0):
    if n < 1 or n > 12:
        return ''
    nord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh",
            "twelfth"]
    return (nord[n - 1])


def verso_n(n):
    nord = ["first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh",
            "twelfth"]
    regali = ["A partridge in a pear tree", "Two turtle doves", "Three French hens", "Four calling birds",
              "Five gold rings",
              "Six geese a-laying", "Seven swans a-swimming", "Eight maids a-milking", "Nine ladies dancing",
              "Ten lords a-leaping", "Eleven pipers piping", "Twelve drummers drumming"]
    s = f"\n On the {nord[n-1]} day of Christmas my true love sent to me:"
    finale = f"\n A partridge in a pear tree."
    for i in range(n-1 , 0,-1):
        s += f"\n {regali[i]},"
    s += finale
    return s


def verso(n):
    s=""
    if n == 1:
        s+=verso_n(1)
    else:
        s+= verso_n(n) + verso(n - 1)
    return s

if __name__ == '__main__':
    print(verso(12))
