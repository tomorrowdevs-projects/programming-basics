import random 
import tabulate

# lotto_extraction: simulate a lotto extraction. The function returns a dictionary. 
# show_lotto_extraction: the function accepst how argument a dictionary (produced by lotto_extraction)
# check_to_win: count and return the numbers of winners bill (ambata, ambo, ecc...) how dictionary. 
#               The function accepts two arguments: 'ticket'(Lotto_Ticket()) and extraction (produced by lotto_extraction)

def lotto_extraction():
    ruote = ['BARI', 'CAGLIARI', 'FIRENZE', 'GENOVA', 'MILANO', 'NAPOLI', 'PALERMO', 'ROMA', 'TORINO', 'VENEZIA', 'NAZIONALE']
    data_table = {}

    for ruota in ruote:
        drawn_numbers = []
        while len(drawn_numbers) < 5: 
            drawn_out = str(random.randint(1, 90))
            if drawn_out not in drawn_numbers:
                drawn_numbers.append(drawn_out)
            else:
                continue
        data_table.update({ruota : drawn_numbers})
    
    return data_table

def show_lotto_extraction(data_table):
    table = tabulate.tabulate(data_table, headers='keys')

    return table

def check_to_win(ticket, extraction):
    winners_bills = {'ambata': 0, 'ambo': 0, 'terno': 0, 'quaterna': 0, 'cinquina': 0}

    for wheel_played in ticket.ruote:
        same_numbers = 0
        for numbers_played in ticket.numbers:
            if numbers_played in extraction[wheel_played]:
                same_numbers += 1
        
        for bill_played in ticket.sorti:
            if bill_played == 'ambata' and same_numbers >= 1:
                winners_bills[bill_played] += 1
            elif bill_played == 'ambo' and same_numbers >= 2:
                winners_bills[bill_played] += 1
            elif bill_played == 'terno' and same_numbers >= 3:
                winners_bills[bill_played] += 1
            elif bill_played == 'quaterna' and same_numbers >= 4:
                winners_bills[bill_played] += 1
            elif bill_played == 'cinquina' and same_numbers >= 5:
                winners_bills[bill_played] += 1

    if sum(winners_bills.values()) == 0:
        return f'GAME OVER'
    else:
        return winners_bills
