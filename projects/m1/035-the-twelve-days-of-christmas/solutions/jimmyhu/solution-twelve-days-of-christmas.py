basic_phrase = ['My true love sent to me','day of Christmas']
ordinals = ['first','second','third','fourth','fifth','sixth','seventh','eighth','nineth','tenth','eleventh','twelfth']
gifts = [
    'A partridge in a pear tree',
    'Two turtle doves',
    'Three French hens',
    'Four calling birds',
    'Five golden rings',
    'Six geese a laying',
    'Seven swans a swimming',
    'Eight maids a milking',
    'Nine ladies dancing',
    'Ten lords a leaping',
    'Eleven pipers piping',
    'Twelve drummers drumming',
    'And a partridge in a pear tree',
]
# complete song 
for i in range(0,12):
    print(f"\nOn the {ordinals[i]} {basic_phrase[1]} \n{basic_phrase[0]}")
    if i == 0:
        print(gifts[i])
    else:
        for k in range(i,0,-1):
            print(gifts[k])
        print(gifts[len(gifts)-1] + "\n")

# function for select the verse
number = int(input('Which verse you wanto to see? '))
def selected_verse(choose):
    print(f"\nOn the {ordinals[choose-1]} {basic_phrase[1]} \n{basic_phrase[0]}")
    if choose == 1:
        print(gifts[choose-1])
    else:
        for k in range(choose-1,0,-1):
            print(gifts[k])
        print(gifts[len(gifts)-1])

selected_verse(number)