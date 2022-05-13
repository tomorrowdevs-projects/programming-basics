file = input("Name of the file to redact: ")
words = input("Name of the file containint the sensitive words: ")
redacted = input("Name of the new redacted file: ")

with open(file, "r") as file, open(words, "r") as badwords, open(redacted, "w") as redacted:
    lines = file.readlines()
    badwords = badwords.read().strip("\n").split()

    for line in lines:
        line = line.lower()
        for bad in badwords:
            line = line.replace(bad, len(bad)*"*")
        redacted.write(line)
