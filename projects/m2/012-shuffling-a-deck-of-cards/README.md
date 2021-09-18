# Shuffling a Deck of Cards

A standard deck of playing cards contains 52 cards. Each card has one of four suits along with a value. The suits are normally spades, hearts, diamonds and clubs while
the values are 2 through 10, Jack, Queen, King and Ace.
Each playing card can be represented using two characters. The first character is
the value of the card, with the values 2 through 9 being represented directly. 
The characters “T”, “J”, “Q”, “K” and “A” are used to represent the values 10, Jack, Queen, King and Ace respectively. 
The second character is used to represent the suit of the card. It is normally a lowercase letter: “s” for spades, “h” for hearts, “d” for diamonds and “c” for clubs. 

The following table provides several examples of cards and their two-character representations.

| Card | Abbreviation |
|------|-----------|
|   Jack of spades   |    Js     |
|   Two of clubs   |    2c     |
|   Ten of diamonds   |    Td     |
|   Ace of hearts   |    Ah     |
|   Nine of spades   |    Ns     |

Begin by writing a function named createDeck. It will use loops to create a complete deck of cards by storing the two-character abbreviations for all 52 cards into a list. Return the list of cards as the function’s only result. Your function will not require any parameters.

Write a second function named shuffle that randomizes the order of the cards in a list. One technique that can be used to shuffle the cards is to visit each element in the list and swap it with another random element in the list. You must write your own loop for shuffling the cards. You cannot make use of a shuffle function.
Use both of the functions described in the previous paragraphs to create a main program that displays a deck of cards before and after it has been shuffled. Ensure that your main program only runs when your functions have not been imported into another file.

A good shuffling algorithm is unbiased, meaning that every different arrangement of the elements is equally probable when the algorithm completes. While the approach described earlier in this problem suggested visiting each element in sequence and swapping it with an element at a random index, such an algorithm is biased. 
In particular, elements that appear later in the original list are more likely to end up later in the shuffled list. Counterintuitively, an unbiased shuffle can be achieved by visiting each element in sequence and swapping it to a random index between the position of the current element and the end of the list instead of randomly selecting any index.


# Documentation

For this project solution you may use:

- Arrays (Lists)
- Functions
- Conditionals
- Repetitions

# Deadline

This project requires to be completed in a maximum of **4 hours**
