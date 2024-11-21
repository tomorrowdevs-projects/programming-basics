from asyncio.windows_events import proactor_events
from email.mime import base


def anagrams(string_01,string_02):
    letters = {}
    for lett in string_01:
        if lett not in letters:
            letters[lett] = 1
        else:
            letters[lett] +=1
    for word in string_02:
        if word not in letters:
            return False
        else:
            letters[word] -= 1
    if list(letters.values()).count(0) != len(letters):
        return False
    else:
        return True
def main():
    base01 = input('Enter the fist word: ').lower()
    base02 = input('Enter the second word: ').lower()
    print(anagrams(base01,base02))
if __name__ == '__main__':
    main()