number=int(input('Enter a four-digit number'))
nember_str =str(number)
list2 = list(nember_str)
list3= [int(n) for n in list2]
x=sum(list3)
print(x)