import sys

def create_words_list(text):
    text = text.lower()
    for character in text:
        if character.isalpha() == False and character != ' ':
            text = text.replace(character, '')
    words_list = text.split()

    return words_list

def filters_words(words_list):
    ei_ie_list = []
    for word in words_list:
        if word.find('ei') >= 0 or word.find('ie') >= 0:
            ei_ie_list.append(word)
    
    return ei_ie_list

def weird_words(ei_ie_list):
    rules_words = []
    weird_words = []
    for word in ei_ie_list:
        if word.find('ie') == word.find('c') + 1:
            weird_words.append(word)
        elif word.find('cc') >= 0:
            if word.find('ie') == word.find('cc') + 2:
                weird_words.append(word)
            else:
                rules_words.append(word)
        else:
            rules_words.append(word)
    
    rules_words = list(set(rules_words))
    weird_words = list(set(weird_words))
    
    result = f"Words that respect the “I before E except after C” rule: {', '.join(rules_words)} \nExceptions: {', '.join(weird_words)}"

    return result

try:
    with open(sys.argv[1], 'r') as file:
        text = file.read()
        ei_ie_list = filters_words(create_words_list(text))
        print(weird_words(ei_ie_list))
        
except FileNotFoundError:
    print("ERROR: The file doesn't exist!")
except IndexError:
    print("ERROR: Provide a file as argument in command line")