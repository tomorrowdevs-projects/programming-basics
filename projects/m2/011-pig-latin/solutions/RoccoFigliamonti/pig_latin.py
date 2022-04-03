"""
- If the word begins with a consonant (including y), then all letters at the beginning of the word, up to the first vowel (excluding y), are removed and then added to the end of the word, followed by ay. For example, *computer* becomes *omputercay* and *think* becomes *inkthay*.

- If the word begins with a vowel (not including y), then way is added to the end of the word. For example, algorithm becomes *algorithmway* and office becomes *officeway*.

Write a program that reads a line of text from the user. 
Then your program should translate the line into Pig Latin and display the result. 
You may assume that the string entered by the user only contains lowercase letters and spaces."""


text = input("Please enter your test: ").lower().split()
vowel = ("a", "e", "i", "o", "u")
new_text = []
for word in text:
    new_word = ""
    if word[0] in vowel:
        new_word = word + "way"        
    else:
        for char in word:
            if char in vowel: #find the index of the first vowel and then manipulate the string
                index_first_vowel = word.index(char)
                new_word += word[index_first_vowel:] + word[:index_first_vowel] + "ay"
                break #break to not continue along with other vowels in word
    new_text.append(new_word)
print(new_text)

     
#computer think algorithm office