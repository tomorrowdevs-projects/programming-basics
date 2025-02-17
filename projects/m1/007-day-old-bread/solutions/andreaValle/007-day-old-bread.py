#function used to ask and print the data requested
def old_bread():
    purchasing=int(input("Please insert the number of loaves of day old bread you want to purchase (insert '0' to exit): "))
    if purchasing!=0:
        print("Normal price:\n",f'{3.49*purchasing:25.2f}',"€")
        print("Discount applied:\n",f'{3.49*0.6*purchasing:25.2f}',"€")
        print("Final price:\n",f'{3.49*0.4*purchasing:25.2f}',"€")
    else:
        return
    old_bread()


#main
print("Welcome user.") 
old_bread()
print("The program is ended.")