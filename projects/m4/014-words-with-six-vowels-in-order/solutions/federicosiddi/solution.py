
file_name = input("Please provide file to read as argument: ")


pattern = ["a","e","i","o","u","y"]
# We use the count as index for the pattern list
count = 0

try:
    with open(file_name, "r") as f:
        for line in f:
            words = line.lstrip().rstrip().split(" ")
            for word in words:
                for char in word:
                    # if char is equal to the vocal in the pattern list at the index of current value of count
                    # we increment the count and continue comparing the next char with the next vocal
                    if char.lower() == pattern[count]:
                        count += 1
                    # if count value has reached the length of the pattern list we have found a word that matches, so we print the word
                    if count == len(pattern):
                        print(f"Found a word that matches the pattern: {word}")
                # count is resetted to 0 when we have finished iterating the chars in the word and pass the to next word
                count = 0
except FileNotFoundError as err:
    print(err)
