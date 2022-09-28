def reverse_lookup(k='',v=''):
    #creation of dictionary
    grocery_list = {
        'a': ['apples', 'avocado','almonds'],
        'b': 'bananas',
        'c': 'chocolate',
        'd': 'durian',
        'e': ['','egg'],
        'f': 'fish'
    }
    return grocery_list.get(k,v)

if __name__ == '__main__':
    print(reverse_lookup('a',''))
    print(reverse_lookup('',''))
    print(reverse_lookup('','bananas'))
    print(reverse_lookup('e',''))
    print(reverse_lookup('f',''))