
#function that finds all of the keys in a dictionary that map to a specific value.

def histogram(s):                              #histrogram() counts how many times a key is in the dictionary
    d = dict()
    for c in s:
        if c not in d:
            d[c] = 1
        else:
            d[c] += 1
    return d



def reverse_lookup(d, v):                            #reverse_lookup return which letter is wrote that number of time entered by the user
    for k in d:
        if d[k] == v:
             print(k, end=' ')



h = histogram(input('Enter a word '))
k = reverse_lookup(h,int(input('Enter a number to know which letter is written that particular number of times ')))