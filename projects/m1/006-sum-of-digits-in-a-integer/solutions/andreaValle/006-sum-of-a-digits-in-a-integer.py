#this function will do all the work for us
def calculation():
    n=input("\nPlease insert a positive number composed by four digits, with no comma (type zero to exit):\n")
    if int(n)>0:
        if int(n)>999 and int(n)<10000:
            sum_of_digits=int(n[0:1])+int(n[1:2])+int(n[2:3])+int(n[3:4])
            print("\nThe sum of the digits is: ", sum_of_digits)
            calculation()
        else:
            print("\nYou have inserted an invalid input. Please try again.")
            calculation()
    else:
        return

#main body
print("Welcome\nIn this program you can calculate the sum of the digits of a number.")
calculation()
