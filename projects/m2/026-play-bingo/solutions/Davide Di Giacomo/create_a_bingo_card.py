#Write a function that creates a random Bingo card and stores it in a dictionary.
#The keys will be the letters B, I, N, G and O. The values will be the lists of five numbers
#Write a second function that displays the Bingo card with the columns labelled appropriately.

#create a dictionary with loop to generate number (1 to 15 for each letter)
#bring 5 random numbers in values for each letter to generate a bingo card
#write second function to print the bingo card
import random

def bingo():
    letters=["B", "I", "N", "G", "O"]
    numbers=[[], [], [], [], []]
    random_numbers=[[], [], [], [], []]
    #with a cicle generate number (1 to 15 for each letter)
    count=0
    for y in range(5):
        for x in range (1, 16):
            numbers[y].append(count+x)
        count+=15
    #bring random 5 numbers for each letter
    for x in range(5):
        for y in range(5):
            random_numbers[x].append(random.choice(numbers[x]))
    #create a dictionary
    bingo_cards=dict(zip(letters, random_numbers))
    return bingo_cards

def main():
    bingo_cards=bingo()
    print(f"Your Bingo card is:")
    for item in bingo_cards:
        print("{}: {}".format(item,bingo_cards[item]))

if __name__ == "__main__":
    main()