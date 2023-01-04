from solution_only_the_words import only_words

file_sensitive_name = input("Enter the name of the file containing the list of sensitive words: ")
try:
    with open(file_sensitive_name) as f_sens_words:
        word_list = only_words(f_sens_words.read())
except FileNotFoundError:
    print("Error! File '{}' not found.".format(file_sensitive_name))
except:
    print("Error! File '{}' could not be opened, make sure it is not a folder.".format(file_sensitive_name))


document_name = input("Enter the name of the file containing the document to be edited: ")
try:
    with open(document_name) as original_document:
        new_document = ""
        for line in original_document:
            if line.strip() == "":
                new_document += "\n\n"
            else:
                temp_line = line.split()
                for sensitive_word in word_list:
                    for word in temp_line:
                        if sensitive_word in word.lower():
                            replaced_word = word.lower().replace(sensitive_word, "*" * len(sensitive_word))
                            temp_line[temp_line.index(word)] = replaced_word
                new_line = " ".join(temp_line)
                new_document += new_line
except FileNotFoundError:
    print("Error! File '{}' not found.".format(document_name))
except:
    print("Error! File '{}' could not be opened, make sure it is not a folder.".format(document_name))


name_new_document = input("Enter the name of the new document: ")
with open("{}.txt".format(name_new_document), "w") as new_file:
    new_file.write(new_document)