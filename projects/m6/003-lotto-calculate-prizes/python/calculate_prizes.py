
# calculate_prizes: the function accepts how arguments ticket and check (check corrisponds to 'check_to_win').
#                   if the 'check' will be successful, the function will return a winning message with the GROSS WIN and the CLEAR WIN.

def calculate_prizes(ticket, check):
    amount_each_wheels = ticket.money_amount / len(ticket.sorti)
    gross_winnings_handbook = {
        'ambata': [11.23, 5.61, 3.74, 2.80, 2.24, 1.87, 1.60, 1.40, 1.24, 1.12],
        'ambo': [0, 250, 83.33, 41.66, 25, 16.66, 11.90, 8.92, 6.94, 5.55],
        'terno': [0, 0, 4500, 1125, 450, 225, 128.57, 80.35, 53.57, 37.50],
        'quaterna': [0, 0, 0, 120000, 24000, 8000, 3428.57, 1714.28, 952.38, 571.42],
        'cinquina': [0, 0, 0, 0, 6000000, 1000000, 285714.28, 107142.85, 47619.04, 23809.52]
    }

    if check != 'GAME OVER':
        text = ''
        gross_win = 0
        for victories in check:
            if check[victories] >= 1:
                gross_win += amount_each_wheels * check[victories] * (gross_winnings_handbook[victories][len(ticket.numbers)-1])
                text += f'{victories.capitalize()}: {check[victories]}\n'
        clear_victory = (gross_win - ((8*gross_win)/100)) / len(ticket.ruote)

        return f'YOU WON !!!\n{text}\nGROSS WIN: € {round(gross_win, 2)}\nCLEAR WIN: € {round(clear_victory, 2)}'

    else:
        return f'GAME OVER'
