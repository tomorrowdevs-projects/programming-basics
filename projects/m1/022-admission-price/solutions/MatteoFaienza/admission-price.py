# this program calculates the entrance fee for each guest based on age

ticket_2_years_or_less = 0
tickets_between_3_and_12_years = 0
ticket_65_or_higher_years = 0
ticket_all_the_others = 0
counter1 = 0
counter2 = 0
counter3 = 0
counter4 = 0
 
while True :
    age = input('Enter the guest age (blank to quit) ')

    if age == ' ' :
        break

    age = int(age)

    if age <= 2 :
       ticket_2_years_or_less = 0
       counter1 += 1

    elif 3 <= age <= 12 :
      tickets_between_3_and_12_years = 14
      counter2 += 1

    elif age >= 65 :
       ticket_65_or_higher_years = 18
       counter3 += 1 

    else :
        ticket_all_the_others = 23
        counter4 += 1

    total_pay = (ticket_2_years_or_less * counter1) + (tickets_between_3_and_12_years * counter2) + (ticket_65_or_higher_years * counter3) + (ticket_all_the_others * counter4)

print(f'The total expense of the group is {total_pay :.2f} €') 


