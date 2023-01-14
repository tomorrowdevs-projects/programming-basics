def decopressing_list(compressed_list):
    elements_to_add = list(compressed_list[0]*compressed_list[1])
    if len(compressed_list) == 2:   # Base case
        return elements_to_add
    elif len(compressed_list) > 2:
        return elements_to_add + decopressing_list(compressed_list[2:])
    
def main():
    compressed_list = ["A", 12, "B", 4, "A", 6,"B", 1]
    print(decopressing_list(compressed_list))

if __name__ == "__main__":
    main()
