user_word = str(input("Please type a word an i will tell you if it is a palyndrome: "))

if(user_word==user_word[::-1]):
    print(f"Your word, {user_word}, is a palyndrome")
else:
    print(f"Your word, {user_word}, is not a palyndrome")