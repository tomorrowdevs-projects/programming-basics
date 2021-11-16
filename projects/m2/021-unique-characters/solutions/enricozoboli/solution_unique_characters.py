def build_dict(s):
    d = dict()
    for c in s.lower() :
       if ord(c) in range(97, 123):
            d[c] = d.get(c, 0)
            d[c] += 1
    return d
   

if __name__ == "__main__":
    s = input("Enter a phrase: ")
    if len(build_dict(s)) < 1:
        print("Enter at least one character!")
    elif len(build_dict(s)) == 1:
        print(f"Your phrase as {len(build_dict(s))} unique character." )
    else:
        print(f"Your phrase as {len(build_dict(s))} unique characters." )
    

    
