# Two words are anagrams if they contain all of the same letters, but in a different order.

# For example, “evil” and “live” are anagrams because each contains one “e”, one “i”, one “l”, and one “v”.

# Create a program that reads two strings from the user, determines whether or not they are anagrams, and reports the result.

print("\nEnter first word")
user_input1 = input()
print("\nEnter second word")
user_input2 = input()

anagram_list = []

for l in user_input1:
    if l in user_input2:
        anagram_list.append(l)

if len(user_input1) == len(anagram_list):
    print("YES!")
else:
    print("NO!")