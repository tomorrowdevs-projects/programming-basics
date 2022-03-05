#simulates a game of Bingo. Begin by generating a list of all of the valid Bingo calls (B1 through O75).
#randomize the order of lists elements by random module.
#program should consume calls out of the list and cross out numbers until the card contains a winning line.
#Simulate 1,000 games and report the minimum, maximum and average number of calls for winner.
#import your solutions to Exercises "Create a Bingo Card" and "Checking for a winning Card" 

#create a list of bingo calls: add two list (alphabet+numbers) and randomize it
#through function start the game and stop when a card is winner, with a cicle Simulate 1,000 games
#put number of calls for winner in a list and bring minimum, maximum and average number. return the solution

import create_a_bingo_card 
import checking_winning_card
import random

def bingo_folders():
    #create a list of dictionaries
    folders=[]
    alphabet=["B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"]
    #add number between 1 and 75 for each letter in alphabet
    for x in alphabet:
        for y in range(1, 76):
            #import function to create a bingo card then put card in a list 
            bingo_cards=create_a_bingo_card.bingo()
            folder=bingo_cards
            folders.append(folder)
    return folders

def victory():
    folders=bingo_folders()
    calls=[]
    #create a list with all bingo numbers
    numbers=[]
    for z in range(1, 76):
        numbers.append(z)
    for x in range(len(folders)):
        count=1
        #import function to create bingo cards
        bingo_cards=create_a_bingo_card.bingo()
        #with a cicle bring a random numbers until card wins
        for y in range(75):
            #extraction
            numb=random.choice(numbers)
            for key, value in bingo_cards.items():
                #check if random number is in a line in bingo card and change the number with 0
                if numb in value:
                    value = [0 if item == numb else item for item in value]
                    bingo_cards[key]  =  value
            #check winner for each card throught function imported 
            horizontal=checking_winning_card.horizontal(bingo_cards)
            vertical=checking_winning_card.vertical(bingo_cards)
            diagonal1=checking_winning_card.diagonal_1(bingo_cards)
            diagonal2=checking_winning_card.diagonal_2(bingo_cards)
            #put number of calls for winner in a list
            if horizontal==True or vertical==True or diagonal1==True or diagonal2==True:
                calls.append(count) 
                break
            #if it is a card loser add 1
            else: count+=1
    #list with all calls for each card to win
    winner_call=sorted(calls)
    #return only first winner card
    return winner_call[0]
        
def average_1000():
    average=[]
    #simulate 100 games
    for x in range(100):
        winner=victory()
        average.append(winner)
    results=sorted(average)
    #calculating the average for the first call to winner card
    real_average=round(sum(results)/len(results))
    #print the minimum call for a win, the maximum call and the average
    print(f"In 100 games the minimum call was: {results[0]}, the maximum was: {results[-1]}, the average was: {real_average}!")
    
(average_1000())