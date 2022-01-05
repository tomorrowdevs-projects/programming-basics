import random

def draw_numbers(max_range, total_numbers):
    
    # generates numbers from 1 to 'max range'
    # recieve the total number of the numbers to create
    # return a list of random numbers

    draw = random.sample(range(1, max_range), total_numbers)
    draw.sort()  
    draw = [str(numbers) for numbers in draw]
    return draw

def main():

    # Write a program that generates a random selection of 6 numbers for a lottery ticket.

    ticket = draw_numbers(49, 6)
    winning_numbers = draw_numbers(49, 6)
    print(f"The numbers of your ticket are: {', '.join(ticket[: -1])} and {ticket[-1]}.")
    print(f"The winning numbers are: {', '.join(winning_numbers[: -1])} and {winning_numbers[-1]}.")


if __name__ == '__main__':
    main()


