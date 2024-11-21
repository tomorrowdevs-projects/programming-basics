import re
text = input('Insert a sentence to capitalize:')

punc_filter = re.compile('([.!?]\s*)')
split_with_punctuation = punc_filter.split(text)

final = ''.join([i.capitalize() for i in split_with_punctuation])
print(final)