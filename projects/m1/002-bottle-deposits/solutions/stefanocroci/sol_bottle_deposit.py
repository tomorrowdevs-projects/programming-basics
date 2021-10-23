print('recycle containers, you will be refund!')
s_cntrs = input('insert the number of one-liter or less containers in your possession: ')
b_cntrs = input('insert the number of more than a liters containers in your possession: ')
s_cntrs = int(s_cntrs)
b_cntrs = int(b_cntrs)
refund = s_cntrs*0.10 + b_cntrs*0.25
refund = float(refund)
formatted_float = "{:.2f}".format(refund)
print('your refund is $ ' + str(formatted_float))