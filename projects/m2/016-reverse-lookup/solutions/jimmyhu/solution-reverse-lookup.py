import random
def reverseLookup(dic, val):
    lst = []
    for k in dic:
        if dic[k] == val:
            lst.append(k)
    return lst

test_diction = {
}
while len(test_diction) < 20:
    word = ''
    lenght = random.randint(5,20)
    for k in range(lenght):
        word += chr(random.randint(48,123))
    if word not in test_diction:
        test_diction[word] = random.randint(0,10)

def main():
    value = int(input('Enter a number: '))
    print(reverseLookup(test_diction,value))
    if len(reverseLookup(test_diction,value)) == 0:
        print(f"No key with this value!")
    else:
        for element in reverseLookup(test_diction,value):
            print(f"The value of the key \"{element}\" is {test_diction[element]}")
if __name__ == '__main__':
    main()