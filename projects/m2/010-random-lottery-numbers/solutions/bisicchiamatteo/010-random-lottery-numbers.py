import random
        
def lottery_draw():
     for number in range(6):
              draw_out=int(random.randint(1,49))
              lottery_bet.append(draw_out)

def main():
        global lottery_bet
        lottery_bet=[]
        lottery_draw()
        print (lottery_bet)


if __name__ == "__main__":
    main()

