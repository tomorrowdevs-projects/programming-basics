alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
alphabet_upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
punctuation_marks = ['!', '"', '%', '&', '/', '(', ')', '=', '?', '^', '+', "'", '-', ' ']

enc, number = input('insert phrase to encode and number separated by whitespace: \n').split()

numb = int(number)
if numb == 0:
    print('invalid number')
elif numb > 0 :
        new_string = ""
        for i in enc:
            if i in punctuation_marks:
                new_string += i
            elif i in alphabet_upper:
                new_string += alphabet_upper[(alphabet_upper.index(i) + numb) % 26]
            elif i in alphabet:
                new_string += alphabet[(alphabet.index(i) + numb) % 26]
        print(new_string)
elif numb < 0:
        new_string = ""
        for i in enc:
            if i in punctuation_marks:
                new_string += i
            elif i in alphabet_upper:
                new_string += alphabet_upper[(alphabet_upper.index(i) + numb) % - 26]
            elif i in alphabet:
                new_string += alphabet[(alphabet.index(i) + numb) % - 26]
        print(new_string)


