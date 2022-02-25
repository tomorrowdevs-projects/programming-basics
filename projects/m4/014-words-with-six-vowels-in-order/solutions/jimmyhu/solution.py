import os
import string

def six_vowel(path,list,unique):
    try:
        with open(path,'r', encoding='UTF-8') as data:
            for line in data:
                row = line.strip().split(' ')
                #clear the words from punctuation
                words = [word.translate(str.maketrans('','',string.punctuation)).lower() for word in row]
                for element in words:
                    #start a dictionary for count the vowel
                    vowel_checker = {}
                    for letter in element:
                        if letter in unique:
                            if letter not in vowel_checker:
                                #give the index of the vowel in the word as value for sort it later
                                vowel_checker[letter] = element.index(letter)
                            else:
                                #break of checking the single word, back to the line words loop
                                break
                    sorted_vowel = ''.join(sorted(vowel_checker, key=lambda x: vowel_checker[x]))
                    if len(vowel_checker) == len(unique) and sorted_vowel == unique and element not in list:
                        list.append(element)
                    else:
                        continue
            return list
    except FileNotFoundError:
        print(f"File not Found")

def main():
    print('The File must be in the same directory of the script')
    file_name = input('Enter Here the name of the file: ')
    file_path = os.path.realpath(os.path.join(os.path.dirname(__file__), file_name))
    vowels = 'aeiouy'
    final_list = []
    for result in six_vowel(file_path,final_list,vowels):
        print(result)
if __name__ == '__main__':
    main()