def format_list(l):
    items = ""
    if len(l) == 0:
        items = "Your list is empty"
    elif len(l) == 1:
        items = l[0]
    else:
        l.insert(-1, "and")
        if len(l) > 3:
            for i in range(0, len(l)):
                if l[i] == l[len(l)-3]:
                    items += l[i]
                    items += " "
                elif l[i] == l[len(l)-2]:
                    items += l[i]
                    items += " "
                elif l[i] == l[len(l)-1]:
                    items += l[i]
                else:
                    items+= l[i]
                    items+= ", "
        else:
            delimiter = " "
            items = delimiter.join(l)
    return items

def main():
    items = []
    while True:
        print("Insert your item and press enter one by one.")
        l = input("(blank for display result and exit): ")
        if l == " " or l == "  " or l == " " * 3 :
            return  print(f"\n{format_list(items).capitalize()}.")
        else:
            items.append(l)


if __name__ == "__main__":
    main()     
 