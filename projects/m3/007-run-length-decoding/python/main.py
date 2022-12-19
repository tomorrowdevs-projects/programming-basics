def decompress_list(compressed_list):
    if len(compressed_list) == 0:
        return compressed_list
    dec1 = list(compressed_list[0] * compressed_list[1])
    dec2 = decompress_list(compressed_list[2:])
    return dec1 + dec2

if __name__ == "__main__":
    example_lists = [["A",12,"B",4,"A",6,"B",1], [8, "A", 3, "B", 1, "A", 12, "B"], [4, "A", 3, "B", 2, "C", 1, "D", 2, "A"]]
    for l in example_lists:
        print("Compressed list: {}\nDecompressed list: {}\n\n".format(l, decompress_list(l)))