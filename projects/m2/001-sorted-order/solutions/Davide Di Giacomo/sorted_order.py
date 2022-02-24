def zero_stop():
    numbers=[]
    number=1
    #cicle for append number in numbers
    while number!=0:
        number=int(input("Insert your integer, write 0 to stop: "))
        numbers.append(number)
    #when input is 0 return list and remove 0
    else:
        numbers.remove(numbers[-1])
        return sorted(numbers)
    
print(zero_stop())
