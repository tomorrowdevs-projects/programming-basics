new_dict={}

def insert_2_dict():
    message = input("insert the text ")
    for char in message:
        new_dict.setdefault(char,0)
        new_dict[char]=new_dict[char]+1


    
def reverseLookup():
    insert_2_dict()
    value=input("insert the value to reserch in dictionary ")
    if value in new_dict.keys():
        print("the entered value was found "+str(new_dict.get(value,0))+ " times")



        

def main():
    reverseLookup()

if __name__ == "__main__":
    main()
