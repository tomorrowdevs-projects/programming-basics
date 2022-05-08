
def decoder(lst):
    decoded = []
    if lst == []:
        return decoded
    
    if lst[1] == 0:
        return decoded + decoder(lst[2:])
    else:
        decoded.append(lst[0])
        lst[1] -= 1
        return decoded + decoder(lst)
    


if __name__ == "__main__":
    lst = ["A",12,"B",4,"A",6,"B",1]
    input(f"This is an encoded list: \n{lst}\nPress ENTER to decode ")
    print(f"This is the list decoded:\n{decoder(lst)}")
