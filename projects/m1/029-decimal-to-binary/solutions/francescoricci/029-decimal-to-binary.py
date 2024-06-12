#exercise 029-binary-to-decimal by francesco Ricci

def convertToBinary(q):
    result = []
    while (q > 0):
        result = [str(q % 2), *result]
        q //= 2
    return ''.join(result)

print(convertToBinary(10200))





