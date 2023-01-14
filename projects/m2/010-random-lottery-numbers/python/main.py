from random import sample
    
def lottery_numbers():
    number_list = sample(range(1,50), 6)  # draw 6 random numbers from 1 to 49 and put them in a list
    number_list.sort()
    print(*number_list, sep = ", ")

if __name__ == '__main__':
    lottery_numbers()