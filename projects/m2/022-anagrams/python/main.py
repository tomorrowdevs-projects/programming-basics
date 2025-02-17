string_1 = input("First string: ")
string_2 = input("Second string: ")

list_1 = list(string_1)
list_2 = list(string_2)

list_1.sort()
list_2.sort()

if list_1 == list_2 :
    print("YES Anagrams")
else:
    print("NOT Anagrams")
