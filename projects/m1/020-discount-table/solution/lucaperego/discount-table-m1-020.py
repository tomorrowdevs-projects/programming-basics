

discount = 0

purchases_list = [4.95, 9.95, 14.95, 19.95, 24.95]

for el in purchases_list:
    
    print("Old Price: ",  el)
    print(" - Discount: ", round((el*0.6), 2))
    print (" - New Price: ", round((el-discount), 2)) 