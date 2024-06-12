def zero_stop():
    numbers=[]
    number=1
    #cicle for append number in numbers
    while number!=0:
        number=int(input("Insert your integer, write 0 to stop: "))
        numbers.append(number)
    #reverse print list 
    else:
        numbers.remove(numbers[-1])
        reverse= sorted(numbers)
        i = len(numbers) - 1
        while(i >= 0):
            print(str(reverse[i]))
            i = i - 1
            
zero_stop()