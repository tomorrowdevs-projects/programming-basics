#Create a program that uses this algorithm to display all of the prime numbers between 2 and a limit entered by the user.
#create a list with numbers between 2 and the input
#with a cicle, find multiples in that number and remove those
#the numbers remained in list are prime numbers

#create a list with numbers between 2 and the input
def create_list(number):
    list1=[]
    for i in range (2, number+1):
        list1.append(i)
    return list1

def sieve(number):
    list1=create_list(number)
    #select everyone element in list
    for x in list1:
        #find multiples
        for y in list1:
            if y%x==0 and y!=x:
            #remove multiples
                list1.remove(y)
    return (list1)
            
number=int(input("Input a number to find prime numbers: "))
print(sieve(number))