def create_dict(phrase):
    char_dict = dict()
    for char in phrase:
        if char == " ":
            continue
        elif char not in char_dict:
            char_dict[char] = 1
        else:
            char_dict[char] += 1
    return char_dict

def reverse_lookup(char_dict, value):
    reverse_dict = dict()
    for k in char_dict:
        val = char_dict[k]
        if val not in reverse_dict:
            reverse_dict[val] = [k]
        else:
            reverse_dict[val].append(k)
    return reverse_dict.get(value, [])

def print_keys(r):
    if not r:
        print("Thers's no key.")
    else:
        print(' '.join(r))
        
        
if __name__ == "__main__":
    print_keys(reverse_lookup(create_dict('The lord of the rings'
    ': the fellowship of the ring '), 9))
    print_keys(reverse_lookup(create_dict('The lord of the rings:'
    'the fellowship of the ring '), 3))
    print_keys(reverse_lookup(create_dict('The wheel of time:'
    'the eye of the world'), 4))
    print_keys(reverse_lookup(create_dict('The wheel of time:'
    'the eye of the world'), 1))
