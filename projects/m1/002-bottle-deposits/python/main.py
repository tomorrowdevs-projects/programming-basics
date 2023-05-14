small_containers = input('Drink containers holding one liter or less: ')
big_containers = input ('Drink containers holding more than one liter: ')

#Calculate the refound
refund_small_containers= float (small_containers) * 0.10
refund_big_containers= float (big_containers) * 0.25

refund_total = float (refund_small_containers) + float (refund_big_containers)


print('refund total is {} $'. format(refund_total))
