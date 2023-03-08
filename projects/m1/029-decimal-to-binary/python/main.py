results = ""
q = int(input('Enter a number:  '))
while q > 0:
    r = q % 2
    results = str(r) + results
    q = q // 2
print(results)
