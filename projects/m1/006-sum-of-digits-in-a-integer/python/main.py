number = int(input("Enter your number with a maximum of 4 digits: ")) #I don't know, without if/while/function how to accept a 4 digits number
number = sum(map(int, str(number))) #In this step there is a sum of the numbers to have a sum of this. 

print(number)


#I didn't know how to perform correctly this step so I studied the map function that allowd to perform action in list ecc
# str trasform number in string, so I can take it separately, then int transform again all in number to perform a sum of all.
