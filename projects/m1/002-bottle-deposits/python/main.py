print('This program calculate your refund for container returns.')
print('Insert the number of your containers less or equal than 1 liter')
small_containers = int(input())

print('Insert the number of your containers that contains more than 1 liter')
big_containers = int(input())

if small_containers <= 0 and big_containers <= 0:
    print('Error: invalid number. \nExit program ...')
    exit()
else: 
    total_refund = (big_containers * 0.25) + (small_containers * 0.10)
    print('Your refund is: ', "{:.2f}".format(total_refund) ,'$')