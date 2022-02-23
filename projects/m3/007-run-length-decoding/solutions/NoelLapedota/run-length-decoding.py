tv = ["A",12,"B",4,"A",6,"B",1]
def decompression(data):
    #case base
    if int not in data:
        return data
    # Fn recursive
    else:
        a = data[0]
        b = data[1]
        return a * b + decompression(data[2:])
    
print(decompression(tv))

if __name__ == '__main__':
    main()
