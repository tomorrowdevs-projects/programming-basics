def run_len_encode(l):
    """
    Takes a list or a string as argument, compressed it
    and return a run length encoded list  
    Parameter:
    l: list or string of characters like l = ['A', 'A', 'B']
    Return:
    run encoded list like ['A', 2, 'B', 1]
    """
    
    if not l and type(l) == list:
        return l
    elif not l and type(l) == str:
        return list(l)
    else:
        count = 0
        l_2 = []
        l_2.append(l[0])
        for x in l:
            if x == l_2[0]:
                count += 1
            else:
                break
        l_2.append(count)
        return l_2 + run_len_encode(l[count:]) 

def main():
    while True:
        string = input("Enter a string(blank for quit): ")
        if string == " ":
            break
        else:
            encoded_string = run_len_encode(string)
            print(f"Run lenght encoded result: {encoded_string}")


if __name__ == "__main__":
    main()



