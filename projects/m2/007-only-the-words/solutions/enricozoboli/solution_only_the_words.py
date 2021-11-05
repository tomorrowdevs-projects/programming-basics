def remove_punctuation(s):
    splitted_s = s.split(" ")
    punctuation = [",", ".", "!", "?", ":", ";", "-"]
    ticks = ["'", '"', "’", "’"]
    listed_words = []
    for w in range(0,len(splitted_s)):
        word = list(splitted_s[w])
        new_word = ""
        for i in range(0, len(word)):
            if word[i] in ticks and len(word) > 2:
                new_word += word[i]
            elif word[i] not in punctuation and word[i] not in ticks:
                new_word += word[i]
            else:
                continue
        if new_word:
            listed_words.append(new_word) 
        else:
            continue
    return listed_words
            
if __name__ == "__main__":
    s = input("Enter a phrase: ")
    print(remove_punctuation(s))
                
