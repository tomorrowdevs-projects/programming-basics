import string
import sys


def find_adjacent(args):
    """
    Takes a text file as a command line argument and return a list
    of words in which each of them cointain the substring 'ie' or 'ei'.
    Parameter:
        - Text file
    Return:
        - A list
    """
    words = []
    with open(args) as reader:
        for line in reader:
            for word in line.split():
                if ('ie' in word or 'ei' in word.lower()) and \
                word.lower() not in words:
                    words.append(word.lower().strip(string.punctuation + \
                    string.whitespace))
        return words
    
    
def find_rule_followers(words_lst):
    """
    Takes a list of words and return two lists. One of the lists
    contains only words following the rule “I before E except after C”.
    The other list contains only the exception of the rule.
    Parameter:
        - A list
    Return: 
        - Two lists 
    """
    rule_followers = []
    rule_not_followers = []
    for word in words_lst:
        if ('cei' in word or 'ie' in word) and word not in rule_followers:
            rule_followers.append(word)
        elif 'ei' in word and word not in rule_not_followers:
            rule_not_followers.append(word)
    return rule_followers, rule_not_followers


def main():
    rule_followers, rule_not_followers = find_rule_followers\
        (find_adjacent(sys.argv[1]))
    print(f"Words that follows the rule are: {len(rule_followers)}")
    print(f"Words that don't follows the rule are: {len(rule_not_followers)}")

try:
    main()
except FileNotFoundError as fnf_error:
        print(fnf_error)
        print("File doesn't exist or wrong path")
except IndexError as idx_error:
        print(idx_error)
        print("No file as entered as argument.")