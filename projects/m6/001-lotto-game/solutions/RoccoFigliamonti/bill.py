from random import sample


class Bill:

    cities = ["Bari", "Cagliari", "Firenze", "Genova", "Milano", "Napoli", "Palermo", "Roma", "Torino", "Venezia", "Tutte"]
    bet_types = ["Ambo","Terna","Quaterna","Cinquina"]

    def __init__(self, bill_num:int, city:str, bet_type:str, num_list:list):
        #assert 0 <= bill_num < 6, f"The max number of bills is 5"
        #assert bet_type.capitalize() in Bill.bet_types, f"Invalid bet type"
        #assert city.capitalize() in Bill.cities, f"Invalid city"
        self.bill_num = bill_num
        self.city = city
        self.bet_type = bet_type
        self.num_list = num_list


    def __str__(self):

        line = f"+{'-'*10}+{'-'*10}+{'-'*10}+{'-'*40}+\n"
        
        header = f"|{('TICKET N').center(10)}|{('CITY').center(10)}|{('BET').center(10)}|{('NUMBERS').center(40)}|\n"
        
        ticket = "|"+f"{self.bill_num}".center(10) + "|" + f"{self.city}".center(10) + "|" + f"{self.bet_type}".center(10) + "|" + f"{self.num_list}".center(40) + "|\n"
       
        return line + header + line + ticket + line
        


def bill_num():
    bills = int(input("How many bills do you want to generate? (type 0 to exit): "))
    if 0 < bills < 6:
        return bills
    elif bills == 0:
        print("Thanks for playing!")
        exit()
    else:
        print("The max number of bill is 5")
        bill_num()


def city_choice():
    print(Bill.cities)
    city = input("Please insert the city for this bill, choosing from the above list: ").capitalize()
    if city in Bill.cities:
        return city
    else:
        print("This is an invalid city")
        city_choice()


def bet_choice():
    print(Bill.bet_types)
    bet_type = input("Please insert the type of bet for this bill, choosing from the above list: ").capitalize()
    if bet_type in Bill.bet_types:
        return bet_type
    else:
        print("This is an invalid bet")
        bet_choice()


def ticket_number_generation():
    total_numbers_to_bet = int(input("Please insert how many numbers do you want to bet (2-10): "))
    if 1 < total_numbers_to_bet < 11:
        numbers = sample(range(1,91), total_numbers_to_bet)
        return numbers
    else:
        print("Invalid number")
        ticket_number_generation()


def ticket_generation():
    ticket_list = []
    x = bill_num()
    for i in range(1,x+1):
        city = city_choice()
        bet_type = bet_choice()
        numbers_to_bet = ticket_number_generation()
        ticket = Bill(i, city, bet_type, numbers_to_bet)
        ticket_list.append(ticket)
    return ticket_list




#main
ticket_list = ticket_generation()
for el in ticket_list:
    print(el)


