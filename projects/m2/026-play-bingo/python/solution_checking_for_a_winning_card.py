from solution_create_a_bingo_card import *

def checking_winning_card(card):
    for i in range(5):
        if card["B"][i] == 0 and card["I"][i] == 0 and card["N"][i] == 0 and card["G"][i] == 0 and card["O"][i] == 0:
            return True
    for k in card:
        if sum(card[k]) == 0:
            return True
    if card["B"][0] == 0 and card["I"][1] == 0 and card["N"][2] == 0 and card["G"][3] == 0 and card["O"][4] == 0:
        return True
    if card["B"][4] == 0 and card["I"][3] == 0 and card["N"][2] == 0 and card["G"][1] == 0 and card["O"][0] == 0:
        return True


def main():
    case_one = {"B":[5,0,1,4,3], "I":[22,0,24,29,23], "N":[33,0,44,41,42], "G":[59,0,46,51,54], "O":[62,0,73,67,71]}
    case_two = {"B":[14,12,10,2,4], "I":[26,30,24,17,23], "N":[0,0,0,0,0], "G":[60,55,56,52,59], "O":[63,70,75,73,67]}
    case_three = {"B":[0,3,11,10,1], "I":[22,0,21,23,20], "N":[32,31,0,43,35], "G":[47,57,51,0,52], "O":[61,67,69,64,0]}
    case_four = {"B":[7,9,5,1,0], "I":[19,23,30,0,18], "N":[31,45,0,38,33], "G":[46,0,59,52,60], "O":[0,73,61,64,66]}
    case_five = {"B":[13,0,12,15,1], "I":[27,0,28,23,26], "N":[45,32,0,36,33], "G":[54,0,53,47,57], "O":[67,63,0,68,65]}
    case_six = {"B":[6,0,8,0,0], "I":[28,0,0,0,30], "N":[0,34,41,0,0], "G":[0,49,0,0,0], "O":[72,0,0,70,0]}
    cases_to_prove = [case_one, case_two, case_three, case_four, case_five, case_six]

    for case in cases_to_prove:
        display_bingo_card(case)
        if checking_winning_card(case):
            print("Contains a winning line!\n\n")
        else:
             print("Does not contain a winning line.\n\n")    


if __name__ == "__main__":
    main()