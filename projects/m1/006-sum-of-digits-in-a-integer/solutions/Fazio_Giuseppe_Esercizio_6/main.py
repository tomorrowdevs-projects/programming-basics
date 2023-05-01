# Develop a program that reads a four-digit integer from the user
# and displays the sum of its digits.

number = input ("put value in seconds: ")
sm = 0
for n in number:
    sm += int(n)

print(sm)
