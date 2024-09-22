def anagrams(string1,string2):
    set1 = set(string1)
    set2 = set(string2)
    if set1 == set2:
        return True

def main():
    first_string = input("Enter the first string: ")
    second_string = input("Enter the second string: ")
    if anagrams(first_string,second_string) is True:
        print("The entered strings are anagrams.")
    else:
        print("The entered strings aren't anagrams.")

if __name__ == "__main__":
    main()