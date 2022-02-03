
q=int(input('Enter the number please \n'))
array = []
a = []
while  q != 0:
    q=int(input('Enter the number please \n'))
    array.append(q)
if len(array) <  4:
 print('ERROR')

array.sort()
a.append(array[0:2])
a.append(array[-2:])
array[0:2] = []
array[-2:] = []
print(array)
print(a)
