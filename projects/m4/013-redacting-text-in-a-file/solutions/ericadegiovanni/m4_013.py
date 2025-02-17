"""
Redact all occurrences of sensitive words in a text file by replacing them with asterisks.
The names of the original text file, sensitive words file, and redacted file will all be provided by the user.
"""

# Read the original text
original_text_path = input('Insert the path of your original text to redact: ')

try:
    with open(original_text_path, 'r') as original_text_file:
        original_text = original_text_file.read().lower()  

except FileNotFoundError:
    print('File not found')

# Create a list of sensitive words from the file
sensitive_words_path = input('Insert the path of the file containing the sensitive words: ')
try:
    with open(sensitive_words_path, 'r') as sensitive_words_file:
        sensitive_words_list = [line.lower().rstrip() for line in sensitive_words_file]

except FileNotFoundError:
    print('File not found')


redacted_text = original_text

redacted_text_path = input('Insert the path of your redacted file: ')

# identify the forbidden words in the text and replace them
with open(redacted_text_path, 'w') as redacted_text_file:
    for word in sensitive_words_list:
        redacted_text = redacted_text.replace(word, '*'*len(word))

print(redacted_text)