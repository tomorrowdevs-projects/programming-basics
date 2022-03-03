#create a dictionary in main and use reverse_lookup to check
#check if reverse_lookup when it returns multiple keys, a single key, and no keys

months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]


def reverse_lookup(d1, key):
    return (d1.get(key));

def main():
    #create a list of keys
    list_keys=[]
    for x in range(1, len(months)+1):
        list_keys.append(x)
    #create a dictionary
    d1=dict(zip(list_keys, months))
    return d1
    
if __name__ == "__main__":
    print(main())
    key=(input("Insert a key to return the corresponding value: "))
    d1=main()
    print(reverse_lookup(d1, key))