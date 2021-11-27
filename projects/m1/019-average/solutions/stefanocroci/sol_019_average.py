print('''To know the average insert a sequence of number, press ENTER between one
and another. Insert 0 and press ENTER to see your average''')

n = float(input(''))
sum = 0
count = 0
if n == 0:
    print("ERROR! The first number can' t be zero")
else:
    while n != 0:
        sum += n
        count += 1
        n = float(input()) 
  
    print('The average is: ' + str(sum / count))



# Second method using just one input
#(I' ve tried that because at first I didn't understand the README and I thought 
# that I had to use just one input..i found it more difficult)
 
# n = input().split(' ')
# i = 0
# sum = 0
# count = 0

# while i < len(n) and int(n[i]) != 0:
#     sum += int(n[i])
#     count += 1
#     i += 1

# print(sum / count)
