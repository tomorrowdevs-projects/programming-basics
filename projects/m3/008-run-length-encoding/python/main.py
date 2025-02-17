def encode(decompressed_item):
    if len(decompressed_item) == 0:
        return []
    encoding1 = [decompressed_item[0], 1]
    i = 1
    same_character = True

    while i < len(decompressed_item) and same_character:
        if decompressed_item[i] == decompressed_item[0]:
            encoding1[1] += 1
            i += 1
        else: 
            same_character = False

    encoding2 = encode(decompressed_item[i:])
    return encoding1 + encoding2


if __name__ == "__main__":
    user_string = input("Enter a string to compress: ")
    print("Compressed list:", encode(user_string))