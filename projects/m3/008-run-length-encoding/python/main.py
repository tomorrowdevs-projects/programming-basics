def encode_list(string):
    if len(string) == 0:
        return []
    count = 0
    for char in string:
        if char == string[0]:
            count += 1
        else:
            break
    decoded = [string[0], count]

    return decoded + encode_list(string[count:])

def main():
    user_string = input("Enter a string to encode: ")
    print(("The run-length encoded list for this string is: {}") .format(encode_list(user_string)))

if __name__ == "__main__":
    main()
