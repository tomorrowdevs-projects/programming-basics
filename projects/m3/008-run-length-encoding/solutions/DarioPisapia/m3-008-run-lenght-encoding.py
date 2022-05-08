
encoded = []
def encoder(lst):   
    if lst == [] or lst == "":
        return encoded
    if encoded != []:
        if lst[0] == encoded[-2]:
            encoded[-1] += 1
            return encoder(lst[1:]) 
    
        if lst[0] != encoded[-2]:
            encoded.append(lst[0])
            encoded.append(1)
            return encoder(lst[1:])
    if encoded == []:
        encoded.append(lst[0])
        encoded.append(1)
        return encoder(lst[1:])

if __name__ == "__main__":
    lst = ["A", "A", "A", "E", "E", "E", "E", "B", "B", "B"]
    print(f"This is the uncompressed list:\n{lst}")
    input("Press ENTER to encode ")
    print(f"This is the encoded list:\n{encoder(lst)}")
