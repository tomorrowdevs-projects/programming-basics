
small_containers = 30
big_containers = 80

#Calculate the refound
refund = ((big_containers * 0.25) + (small_containers * 0.10))

refund = format(refund, '.2f')


print(f"You're refound is $ {refund}")