
# read the ages of all of the guests in a group, with one age entered on each line. 

child1 = 0 # between 3 and 12 years, cost $14.00. 
senior = 0 # 65 years and over, $18.00. 
full_ticket = 0 # all other guests $23.00.
# baby 2 years or less no charge

print('Here you can calculate the total admission price for your group.')
guest_age = input('Insert the age of each guest (enter a blank line if there are no more guests): ')

while guest_age != "":
    
   guest_age = int(guest_age)
   if 2 < guest_age <= 12:
       child1 += 1
   elif guest_age >= 65:
       senior += 1
   elif 12 < guest_age < 65 :
       full_ticket += 1
   else:
       pass

   guest_age = input('Insert the age of each guest (enter a blank line if there are no more guests): ')

#display the admission cost for the group
total_cost = (child1 * 14) + (full_ticket * 23) + (senior * 18)
print(f'The total admission price for your group is: {total_cost:.2f}$.')