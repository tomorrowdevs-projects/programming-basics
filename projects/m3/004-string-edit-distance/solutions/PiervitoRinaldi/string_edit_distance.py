# Compare teo strings and return the edit distance
def string_edit_distace(s, t):
    if len(s) == 0:
        return len(t)
    elif len(t) == 0:
        return len(s)
    else:
        cost = 0
        if s[-1:] != t[-1:]:
            cost += 1
        d1 = string_edit_distace(s[:-1], t) + 1
        d2 = string_edit_distace(s, t[:-1]) +  1
        d3 = string_edit_distace(s[:-1], t[:-1]) + cost
        return min(d1, d2, d3)

def main():
    word_one = input('Enter first word: ')
    word_two = input('Enter second word: ')
    print(string_edit_distace(word_one, word_two))

if __name__ == "__main__":
    main()


    
