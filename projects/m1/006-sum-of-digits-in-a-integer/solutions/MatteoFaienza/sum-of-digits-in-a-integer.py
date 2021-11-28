# input user enter integer number
userNum=int(input('Enter a 4-digit integer '))
# calculation of each digit of the number
n1=int(userNum/1000)
n2=int((userNum-(n1*1000))/100)
n3=int((userNum-(n1*1000+n2*100))/10)
n4=int(userNum-(n1*1000+n2*100+n3*10))
# sum of each digit of the number
tot=n1+n2+n3+n4
# output sum of each digit and the total
print('The result of',n1,'+',n2,'+',n3,'+',n4,'is',tot )