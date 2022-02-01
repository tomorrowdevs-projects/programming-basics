import math

#variables
minute = 50
message = 50
cost_month = 15
cost_911 = 0.44

#insert month's minutes and month's messages
print ("It's time to pay your phone bill!")
print ("Please, insert minutes you used this month:")
minutes = int(input())
print ("Please, insert messages you used this month:")
messages = int(input())

#function to round
def round_up(cost_tot, decimals = 0): 
        multiplier = 10 ** decimals 
        return math.ceil(cost_tot * multiplier) / multiplier

print ("The regular cost of your mobile plan is: " + str(cost_month) + "€")
print ("The cost of 911 service is: " + str(cost_911) + "€")
#to calculate phone bill
if minutes <= minute and messages <= message:
    cost_tot = (cost_month+cost_911) + ((cost_month+cost_911) * 0.04)
    print ("The cost of your taxes is: " + str(round_up(cost_month+cost_911) * 0.04) + "€")
    print ("Your phone bill for this month is: " + str(round_up(cost_tot, 2)) + "€!")

#to calculate extra cost  
elif minutes > minute and messages <= message:
    minutes_cost = (minutes-minute) * 0.25
    cost_tot = (cost_month+cost_911+minutes_cost) + ((cost_month+cost_911+minutes_cost) * 0.04)
    print ("the cost of your extra minutes in this month is: " + str(minutes_cost) + "€")
    print ("The cost of your taxes is: " + str(round_up(cost_month+cost_911+minutes_cost) * 0.04) + "€")
    print ("Your phone bill for this month is: " + str(round_up(cost_tot, 2)) + "€!")

elif messages > message and minutes <= minute:
    messages_cost = (messages-message) * 0.15
    cost_tot = (cost_month+cost_911+messages_cost) + ((cost_month+cost_911+messages_cost) * 0.04)
    print ("the cost of your extra messages in this month is: " + str(messages_cost) + "€")
    print ("The cost of your taxes is: " + str(round_up(cost_month+cost_911+messages_cost) * 0.04) + "€")
    print ("Your phone bill for this month is: " + str(round_up(cost_tot, 2)) + "€!")
    
else:
    minutes_cost = (minutes-minute) * 0.25
    messages_cost = (messages-message) * 0.15
    cost_tot = (cost_month+cost_911+minutes_cost+messages_cost) + ((cost_month+cost_911+minutes_cost+messages_cost) * 0.04)
    print ("the cost of your extra minutes in this month is: " + str(minutes_cost) + "€")
    print ("the cost of your extra messages in this month is: " + str(messages_cost) + "€")
    print ("The cost of your taxes is: " + str(round_up(cost_month+cost_911+minutes_cost+messages_cost) * 0.04) + "€")
    print ("Your phone bill for this month is: " + str(round_up(cost_tot, 2)) + "€!")