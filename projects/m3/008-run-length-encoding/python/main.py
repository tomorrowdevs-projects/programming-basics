def compressing_list(decompressed_list):   
    count = 0
    for element in decompressed_list:
        if element == decompressed_list[0]:
            count += 1
        elif element != decompressed_list[0]:
            result = [decompressed_list[0], count]
            break

    check = (len(decompressed_list) - count)    # If check will be 0, it means that the cases to be analyzed will be finished
    if check > 0:
        return result + compressing_list(decompressed_list[count:])
    elif check == 0:
        result = [decompressed_list[0], count]
        return result

def main():
    decompressed_list = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 
    'B', 'B', 'B', 'B', 'A', 'A', 'A', 'A', 'A', 'A', 'B']
    print(compressing_list(decompressed_list))

if __name__ == "__main__":
    main()
