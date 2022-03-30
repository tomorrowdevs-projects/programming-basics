
#function that removes all the punctuation marks in a string except the apostrophes in the middle of the word.

lis = input('Enter a message with punctuation marks \n')
lis = lis.split()

def remove_punc(text):
    punc = ',.%/()[]{}-_:?!'
    for ele in text:
        if ele in punc:
            text = text.replace(ele, '')
        elif ele == '\'' and ele == text[-1]:
            text = text.replace(ele, '')
    return text


lis = [remove_punc(i) for i in lis]                         #List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list.
print(lis)