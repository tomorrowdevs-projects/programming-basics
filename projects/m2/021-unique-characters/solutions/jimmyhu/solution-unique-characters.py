def unquechr(str):
    letters = {}
    for lett in str:
        if lett not in letters:
            letters[lett] = 1
        else:
            letters[lett] +=1
    return len(letters)
def main():
    base = input('Enter the text: ').lower()
    print(unquechr(base))
if __name__ == '__main__':
    main()