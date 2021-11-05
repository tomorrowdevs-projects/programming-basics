input_file_path = input("Enter the name of the text file to redact: ")
sensitive_words_file_path = input("Enter the name of the sensitive words file: ")
output_file_name = input("Enter the name for the new redacted file: ")


sensitive_words = []
try:
    with open(sensitive_words_file_path, "r") as file:
    # we create a list of all the sensitive words reading from the sensitive words file
        line = file.readline()
        while line != "":
            line = line.rstrip()
            sensitive_words.append(line)
            line = file.readline()
except FileNotFoundError as err:
    print(err)

try:
    # we open both files at the same time, one is used for reading lines the other is used for writing 
    with open(input_file_path, "r") as input_file, open(output_file_name, "w") as output_file :
        input_line = input_file.readline()
        # if input_line is equal to empty string we have reached the end of the file
        while input_line != "":
            for word in sensitive_words:
                output_line = input_line.replace(word, "*" * len(word))
                # we write the line, in case sensitive word is found, the line will be redacted with asterisks
                output_file.write(output_line)
            # we set input line with the value of the next line
            input_line = input_file.readline()
except FileNotFoundError as err:
    print(err)
