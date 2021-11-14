user = input('Insert a string to know if it is a palindrome: ')

# Create a bool to save if not a palindrome
is_a_palindrome = True
for i in range(len(user)):
    # If i is more than len() - 1 - i break the loop to avoid to repeat the same check again
    if i > len(user) - (i + 1):
        break
    # If user[i] is different than len() - 1 - i then it's not a palindrome
    if user[i].lower() != user[len(user) - (i + 1)].lower():
        print(user + ' is not a palindrome')
        is_a_palindrome = False
        break

if is_a_palindrome == True:
    print(user + ' is a palindrome')


# Method two with exit()

# user = input('Insert a string to know if it is a palindrome: ')

# for i in range(len(user)):
#     if i > len(user) - (i + 1):
#         break
#     if user[i].lower() != user[len(user) - (i + 1)].lower():
#         print(user + ' is not a palindrome')
#         exit()

# print(user + ' is a palindrome')