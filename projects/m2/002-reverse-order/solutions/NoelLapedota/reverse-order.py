
q=int(input('Enter thr number please \n'))
array = []
while  q != 0:
    q=int(input('Enter thr number please \n'))
    array.append(q)

array.remove(q)
array.reverse()
print(array)    
