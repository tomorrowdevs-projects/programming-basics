
number_input = int(input('Enter the number: '))
ordinals = ['first','second','third','fourth','fifth','sixth','seventh','eighth','nineth','tenth','eleventh','twelfth']
def poistion(number,array):
    if number >= 1 and number <= 12:
        return array[number -1]
    else:
        return ' '
print(poistion(number_input,ordinals))

if __name__ == '__main__':
    def test():
        for i in range(1,13):
            print(f"{i} " + poistion(i,ordinals))
    test()
