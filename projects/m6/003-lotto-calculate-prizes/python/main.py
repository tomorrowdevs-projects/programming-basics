from lottoticket import Lotto_Ticket
from check_to_win import check_to_win, lotto_extraction, show_lotto_extraction
from calculate_prizes import calculate_prizes

ticket = Lotto_Ticket()
extraction = lotto_extraction()
check = check_to_win(ticket, extraction)


print(ticket)
print(show_lotto_extraction(extraction))
print(calculate_prizes(ticket, check))


        

