import sys
import string
import random

def letter_counter(file):
    try:
        rule_true = []
        rule_false = []
        with open(file, 'r', encoding='UTF-8') as data:
            for line in data:
                line = line.strip()
                words = line.split(' ')
                #formatting the line as list without punctuation
                words = [word.translate(str.maketrans('','',string.punctuation)) for word in words]
                for element in words:
                    try:
                        #check only the words with 'e' adiacent to an 'i'
                        if element.find('ie') > -1 or element.find('ei') > -1:
                            #check if the 'c' is before the 'ei'
                            if element.find('cei') > -1 and element not in rule_true:
                                rule_true.append(element)
                            # check the ie base condition where the c is not before 'ie'
                            elif element not in rule_true and element.find('ie') > -1 and element[element.find('ie') - 1] != 'c':
                                rule_true.append(element)
                            else:
                                 #all the other are not following the rule.
                                if element not in rule_false:
                                    rule_false.append(element)
                    except:
                        continue               
        return f"Followind the rule 'I before E except after C': {len(rule_true)} Words\n{rule_true}\nNot following 'I before E except after C': {len(rule_false)} Words\n{rule_false}"
    except FileNotFoundError:
        print(f"File does not exist")

def main():
    if len(sys.argv) != 2:
        print(f"For use this program, solution-m4-7.py [FILE_1 path]")
        print(f"Error: error of input data")
    else:
        print(letter_counter(sys.argv[1]))

if __name__ == '__main__':
    main()