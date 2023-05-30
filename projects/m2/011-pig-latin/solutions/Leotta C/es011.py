def piglatin(word):
    if word[0] in "aeiou":
        return word + "way"
    else:
        for i in range(1, len(word)):
            if word[i] in "aeiou":
                break
        return word[i:] + word[:i] + "ay"


if __name__ == '__main__':
    string = input("Enter a string (only with lowercase letters and spaces): ")
    string_list = string.split(sep=" ")

    for word in string_list:
        print(piglatin(word), end=" ")