def unique(string):
    character_count = set()
    for char in string:
        if char not in character_count:
            character_count.add(char)
    
    return len(character_count)

if __name__ == "__main__":
    inpt = input("Write something here please: ")
    print(unique(inpt))
