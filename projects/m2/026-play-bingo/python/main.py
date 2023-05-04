import random
#This function create a list with the bingo numbers
def bingo_list():
    numbers = []
    for i in range(1, 76):
        numbers.append(i)
    random.shuffle(numbers)
    print(numbers)
    return numbers

#function that call random number and pop the one extracted
def callNumber(numbers):
    random_index = random.randrange(len(numbers))
    extracted_number = numbers.pop(random_index)
    print(f"The extracted number is: {extracted_number}")
    return extracted_number
#this function create bingo card from random number
def generate_bingo_card():
    card = {"B": [], "I": [], "N": [], "G": [], "O": []}
    start, finish = 1, 15
    for letter in card:
        # generate 5 casual numbers with no repetition for each letter
        numbers = random.sample(range(start, finish+1), 5)
        card[letter] = numbers
        # Update the start and finish for the next letter
        start += 15
        finish += 15 if letter != "N" else 14  # Salta il numero centrale per la lettera "N"
    print(card)
    return card

#this function display the bingo card in 5x5 table
def display_bingo_card(card):
    print("B\tI\tN\tG\tO")
    for i in range(5):
        print(f"{card['B'][i]}\t{card['I'][i]}\t{card['N'][i]}\t{card['G'][i]}\t{card['O'][i]}")

#this function determine when a number is estracted, than switch it with 0
def itsWinning(card, extracted_number):
    for letter, numbers in card.items():
        for i in range(len(numbers)):
            if numbers[i] == extracted_number:
                card[letter][i] = 0
    display_bingo_card(card)

#this function determine when it's bingo toward vertical, orizontal or diagonal axes
def check_bingo(card):
    # Check if all number in one of the column, row or diagonal are 0
    for letter, numbers in card.items():
        # Check if all numbers in the row are 0
        if all(num == 0 for num in numbers):
            return True
        # Check if all numbers in the column are 0
        if all(card[key][i] == 0 for i, key in enumerate(card)):
            return True
        # Check if all numbers in the first diagonal are 0
        if all(card[key][i] == 0 for i, key in enumerate(card)):
            return True
        # Check if all numbers in the second diagonal are 0
        if all(card[key][i] == 0 for i, key in enumerate(reversed(card))):
            return True
    return False
    

if __name__ == "__main__":
    num_games = 1000
    num_calls = []
    for i in range(num_games):
        print(f"Game {i+1}:")
        card = generate_bingo_card()
        display_bingo_card(card)
        numbers = bingo_list()
        num_calls_game = 0
        while not check_bingo(card):
            extracted_number = callNumber(numbers)
            itsWinning(card, extracted_number)
            num_calls_game += 1
        print("YOU WIN!\n")
        num_calls.append(num_calls_game)
    print(f"Number of calls to win each game: {num_calls}")
    print(f"Average number of calls to win: {sum(num_calls)/num_games}")
