def main():
    words = []
    while True:
        user_input = input("Write a word (blank line to stop):\n")
        if user_input == "":
            break
        if user_input not in words:
            words.append(user_input)

    for i in words:
        print(i)

if __name__ == "__main__":
    main()
