def anagram(s1, s2):

    if sorted(s1) == sorted(s2):
        anagrams = True
    else:
        anagrams = False
    return anagrams

def main():
    user1 = input("Enter the first word: ")
    user2 = input("Enter the second word: ")

    if anagram(user1, user2):
        print("Anagram")
    else:
        print("Not anagram")

if __name__ == "__main__":
    main()