print("\nEnter your input")
user_input = input()
normal_string = user_input.lower()
key_pad = {1:["/", ".", ",", "?", "!", ":"], 2:["/", "a", "b", "c"], 3:["/", "d", "e", "f"], 4:["/", "g", "h", "i"], 5:["/", "j", "k", "l"], 6:["/", "m", "n", "o"], 7:["/", "p", "q", "r", "s"], 8:["/","t", "u", "v"], 9:["/","w", "x", "y", "z"], 0:["/", " "]}

keys = list(key_pad.keys())
values = list(key_pad.values())
for l in normal_string:
    for v in values:
        if l in v:
            for n in range(v.index(l)):
                print(keys[values.index(v)], end= "")