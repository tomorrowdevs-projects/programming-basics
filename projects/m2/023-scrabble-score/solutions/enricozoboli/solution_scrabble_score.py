char_point = { 
    1 : ['a','e', 'i', 'l', 'n', 'o', 'r', 's', 't', 'u'],
    2 : ['d', 'g'],
    3 : ['b', 'c', 'm', 'p'],
    4 : ['f', 'h', 'v', 'w', 'y'],
    5 : ['k'],
    8 : ['j', 'x'],
    10 : ['q', 'z']
    }

def build_chars_dict(s):
    d = dict()
    for c in s.lower() :
        if ord(c) in range(97, 123):
            d[c] = d.get(c, 0)
            d[c] += 1
    return d
   
def compute_point(s):
    tot_point = 0
    for k,v in build_chars_dict(s).items():
        for n in char_point.keys():
            if k in char_point[n]:
                tot_point += n * v
    return tot_point

def main():
    while True:
        s = input("Enter a word(blank for exit): ")
        if s == " ":
            break
        else:
            print(f"Total points: {compute_point(s)}")

if __name__ == "__main__":
    main()
    
    