#create list 1 punctuation
#split the input string
#if punctuation is in the end remove them
#add all of them in a list

def split_string(string):
    punctuation = [",", ".", "!", "?", ":", ";", "-"]
    words=[]
    #split the input string
    word = string.split(' ')
    #if punctuation is in the end remove them
    for x in range(0, len(word)):
        check = list(word[x])
        for i in range (0, len(check)):
            if check[i] in punctuation:
                check.pop(i)
                check= "".join(check)
        if check != check:
            words.append(check)
        #if is not in punctuation append in words
        else:
            if check not in punctuation:
                check= "".join(check)
                words.append(check)
    return words
        
def main():
    string= str(input("Enter a string and finish that with '.': "))
    print(split_string(string))
    
main()